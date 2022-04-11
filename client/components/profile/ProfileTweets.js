import React from 'react'
import Post from '../Post'
import { useContext } from 'react'
import { NFTTwittaContext } from '../../context/NFTTwittaContext'

const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

const ProfileTweets = () => {
  const { currentAccountId, currentUser } = useContext(NFTTwittaContext)

  return (
    <div className={style.wrapper}>
      {currentUser.tweets?.map((tweet, index) => (
        <div>
          <Post
            key={index}
            displayName={
              currentUser.name === 'Unnamed'
                ? `${currentUser.walletAddress.slice(
                    0,
                    4
                  )}...${currentUser.walletAddress.slice(-4)}`
                : currentUser.name
            }
            userName={`${currentAccountId.slice(
              0,
              4
            )}..${currentAccountId.slice(-4)}`}
            text={tweet.tweet}
            avatar={currentUser.profileImage}
            isProfileImageNft={tweet.isProfileImageNft}
            timestamp={tweet.timestamp}
          />
        </div>
      ))}
    </div>
  )
}

export default ProfileTweets
