import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { client } from '../lib/client'

export const NFTTwittaContext = createContext()

export const NFTTwittaProvider = ({ children }) => {
  const [appStatus, setAppStatus] = useState('')

  const [currentAccountId, setCurrentAccountId] = useState('')
  const [tweets, setTweets] = useState([])
  const [currentUser, setCurrentUser] = useState({})

  const router = useRouter()

  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])

  useEffect(() => {
    if (!currentAccountId || appStatus !== 'connected') return
    getCurrentUserDetails(currentAccountId)
    fetchTweets()
  }, [currentAccountId, appStatus])
  /**
   * Checks if there is an active wallet connection
   */
  const checkIfWalletIsConnected = async () => {
    if (!window.ethereum) return setAppStatus('noMetaMask')
    try {
      const addressArray = await window.ethereum.request({
        method: 'eth_accounts',
      })
      if (addressArray.length > 0) {
        setAppStatus('connected')
        setCurrentAccountId(addressArray[0])

        createUserAccount(addressArray[0])
      } else {
        router.push('/')
        setAppStatus('notConnected')
      }
    } catch (err) {
      router.push('/')
      setAppStatus('error')
    }
  }
  /**
   * initiate metamask connection
   */
  const connectToWallet = async () => {
    if (!window.ethereum) return setAppStatus('noMetaMask')
    try {
      setAppStatus('loading')

      const addressArray = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })

      if (addressArray.length > 0) {
        setAppStatus('connected')
        setCurrentAccountId(addressArray[0])
        createUserAccount(addressArray[0])
      } else {
        router.push('/')
        setAppStatus('notConnected')
      }
    } catch (err) {
      console.log(error)
      setAppStatus('error')
    }
  }

  const createUserAccount = async (userAddress = currentAccountId) => {
    if (!window.ethereum) return setAppStatus('noMetaMask')
    try {
      const userDoc = {
        _type: 'users',
        _id: userAddress,
        name: 'kennchubby',
        isProfileImageNft: false,
        profileImage:
          'https://about.twitter.com/content/dam/about-twitter/en/brand-toolkit/brand-download-img-1.jpg.twimg.1920.jpg',
        walletAddress: userAddress,
      }

      await client.createIfNotExists(userDoc)

      setAppStatus('connected')
      console.log('successful connection')
    } catch (error) {
      router.push('/')
      setAppStatus('error')
    }
  }

  const getNftProfileImage = async (imageUri, isNft) => {
    if (isNft) {
      return `https://gateway.pinata.cloud/ipfs/${imageUri}`
    } else if (!isNft) {
      return imageUri
    }
  }

  const fetchTweets = async () => {
    const query = `
      *[_type == "tweets"]{
        "author": author->{name, walletAddress, profileImage, isProfileImageNft},
        tweet,
        timestamp
      }|order(timestamp desc)
    `
    const sanityResponse = await client.fetch(query)

    setTweets([])

    sanityResponse.forEach(async (item) => {
      const profileImageUrl = await getNftProfileImage(
        item.author.profileImage,
        item.author.isProfileImageNft
      )

      if (item.author.isProfileImageNft) {
        const newItem = {
          tweet: item.tweet,
          timestamp: item.timestamp,
          author: {
            name: item.author.name,
            walletAddress: item.author.walletAddress,
            profileImage: profileImageUrl,
            isProfileImageNft: item.author.isProfileImageNft,
          },
        }
        setTweets((prevState) => [...prevState, newItem])
      } else {
        setTweets((prevState) => [...prevState, item])
      }
    })
  }
  const getCurrentUserDetails = async (userAccount = currentAccountId) => {
    if (appStatus !== 'connected') return

    const query = `
    *[_type == "users" && _id == "${userAccount}"]{
      "tweets": tweets[]->{timestamp, tweet}|order(timestamp desc),
      name,
      profileImage,
      isProfileImageNft,
      coverImage,
      walletAddress
    }
  `

    const sanityResponse = await client.fetch(query)

    const profileImageUri = await getNftProfileImage(
      sanityResponse[0].profileImage,
      sanityResponse[0].isProfileImageNft
    )

    setCurrentUser({
      tweets: sanityResponse[0].tweets,
      name: sanityResponse[0].name,
      profileImage: profileImageUri,
      isProfileImageNft: sanityResponse[0].isProfileImageNft,
      coverImage: sanityResponse[0].coverImage,
      walletAddress: sanityResponse[0].walletAddress,
    })
  }

  return (
    <NFTTwittaContext.Provider
      value={{
        appStatus,
        currentAccountId,
        connectToWallet,
        fetchTweets,
        tweets,
        getNftProfileImage,
        currentUser,
        getCurrentUserDetails,
      }}
    >
      {children}
    </NFTTwittaContext.Provider>
  )
}
