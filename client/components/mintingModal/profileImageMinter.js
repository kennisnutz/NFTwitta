import React from 'react'
import { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { client } from '../../lib/client'
import { contractABI, contractAddress } from '../../lib/constants'
import { NFTTwittaContext } from '../../context/NFTTwittaContext'
import { ethers } from 'ethers'
import InitialState from './InitialState'
import LoadingState from './LoadingState'
import FinishedState from './FinishedState'
import { pinJSONToIPFS, pinFileToIPFS } from '../../lib/pinata'

const profileImageMinter = () => {
  const { currentAccountId, setAppStatus } = useContext(NFTTwittaContext)
  const router = useRouter()

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [profileImage, setProfileImage] = useState()
  const [status, setStatus] = useState('initial')

  const mint = async () => {
    if (!name || !description || !profileImage) return
    setStatus('loading')

    const pinataMetadata = {
      name: `${name} - ${description}`,
    }

    const ipfsImageHash = await pinFileToIPFS(profileImage, pinataMetadata)
    console.log(ipfsImageHash)
  }

  const modalChildren = (modalStatus = status) => {
    switch (status) {
      case 'initial':
        return (
          <InitialState
            profileImage={profileImage}
            setProfileImage={setProfileImage}
            name={name}
            setName={setName}
            description={description}
            setDescription={setDescription}
            mint={mint}
          />
        )
      case 'loading':
        return <LoadingState />
      case 'finished':
        return <FinishedState />
      default:
        router.push('/')
        setStatus('error')
        break
    }
  }
  return <>{modalChildren()}</>
}

export default profileImageMinter
