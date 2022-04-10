import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export const NFTTwittaContext = createContext()

export const NFTTwittaProvider = ({ children }) => {
  const [appStatus, setAppStatus] = useState('loading')
  const [currentAccountId, setCurrentAccountId] = useState('')

  const router = useRouter()
  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])

  const checkIfWalletIsConnected = async () => {
    if (!window.ethereum) return setAppStatus('noMetaMask')
    try {
      const addressArray = await window.ethereum.request({
        method: 'eth_accounts',
      })
      if (addressArray.length > 0) {
        setAppStatus('connected')
        setCurrentAccountId(addressArray[0])
      } else {
        router.push('/')
        setAppStatus('notConnected')
      }
    } catch (err) {
      router.push('/')
      setAppStatus('error')
    }
  }

  /**initiate metamask connection */

  const connectToWallet = async () => {
    if (!window.ethereum) return setAppStatus('noMetaMask')
    try {
      setAppStatus('loading')
      const addressArray = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })
      if (addressArray.length > 0) {
        //connected
        setCurrentAccountId(addressArray[0])
        setAppStatus('connected')
      } else {
        router.push('/')
        setAppStatus('notConnected')
      }
    } catch (error) {
      console.log(error)
      setAppStatus('error')
    }
  }
  return (
    <NFTTwittaContext.Provider
      value={{ appStatus, currentAccountId, connectToWallet }}
    >
      {children}
    </NFTTwittaContext.Provider>
  )
}
