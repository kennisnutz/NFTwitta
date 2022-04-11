import { useRouter } from 'next/router'
import React from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'
import { useContext } from 'react'
import { NFTTwittaContext } from '../../context/NFTTwittaContext'

const style = {
  wrapper: `border-[#38444d] border-b`,
  header: `py-1 px-3 mt-2 flex items-center`,
  primary: `bg-transparent outline-none font-bold`,
  secondary: `text-[#8899a6] text-xs`,
  backButton: `text-3xl cursor-pointer mr-2 rounded-full hover:bg-[#313b44] p-1`,
  coverPhotoContainer: `flex items-center justify-center h-[15vh] overflow-hidden`,
  coverPhoto: `object-cover h-full w-full`,
  profileImageContainer: `w-full h-[6rem] rounded-full mt-[-3rem] mb-2 flex justify-start items-center px-3 flex justify-between`,
  profileImage: `object-cover rounded-full h-full`,
  profileImageNft: `object-cover h-full`,
  profileImageMint: `bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
  details: `px-3`,
  nav: `flex justify-around mt-4 mb-2 text-xs font-semibold text-[#8899a6]`,
  activeNav: `text-white`,
}

const ProfileHeader = () => {
  const isProfileImageNft = false
  const { currentAccountId, currentUser } = useContext(NFTTwittaContext)
  const router = useRouter()

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.backButton} onClick={() => router.push('/')}>
          <BsArrowLeftShort />
        </div>
        <div className={style.details}>
          <div className={style.primary}>{currentUser.name}</div>
          <div className={style.secondary}>
            {currentUser.tweets?.length}
            {''}
            {currentUser.tweets?.length === 1 ? 'Tweet' : 'Tweets'}
          </div>
        </div>
      </div>
      <div className={style.coverPhotoContainer}>
        <img
          src={currentUser.coverImage}
          alt="image"
          className={style.coverPhoto}
        />
      </div>
      <div className={style.profileImageContainer}>
        <div
          className={isProfileImageNft ? 'hex' : style.profileImageContainer}
        >
          <img
            src={currentUser.profileImage}
            alt=""
            className={
              isProfileImageNft ? style.profileImageNft : style.profileImage
            }
          />
        </div>
      </div>
      <div className={style.details}>
        <div>
          <div className={style.primary}>{currentUser.name}</div>
        </div>
        <div className={style.secondary}>
          {currentAccountId && (
            <>
              @{currentAccountId.slice(0, 4)}...{currentAccountId.slice(-4)}
            </>
          )}
        </div>
      </div>
      <div className={style.nav}>
        <div>Tweets and replies</div>
        <div>Media</div>
        <div>Links</div>
      </div>
    </div>
  )
}

export default ProfileHeader
