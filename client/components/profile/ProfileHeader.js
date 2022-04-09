import { useRouter } from 'next/router'
import React from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'

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
  const currentAccount = '0xfe6589068cde0f0733294BD3e76877bA58Db29d9'
  const router = useRouter()
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.backButton} onClick={() => router.push('/')}>
          <BsArrowLeftShort />
        </div>
        <div className={style.details}>
          <div className={style.primary}>Kenny$$hillz</div>
          <div className={style.secondary}>3 tweets</div>
        </div>
      </div>
      <div className={style.coverPhotoContainer}>
        <img
          src="https://www.hipi.info/wp-content/uploads/2014/06/1500x500-colorful-twitter-header-19-1024x341.jpg"
          alt="image"
          className={style.coverPhoto}
        />
      </div>
      <div className={style.profileImageContainer}>
        <div
          className={isProfileImageNft ? 'hex' : style.profileImageContainer}
        >
          <img
            src="https://pbs.twimg.com/profile_images/1461791690742710280/cm1V7cin_400x400.jpg"
            alt=""
            className={
              isProfileImageNft ? style.profileImageNft : style.profileImage
            }
          />
        </div>
      </div>
      <div className={style.details}>
        <div>
          <div className={style.primary}>Kenny$$hillz</div>
        </div>
        <div className={style.secondary}>
          {currentAccount && (
            <>
              @{currentAccount.slice(0, 4)}...{currentAccount.slice(-4)}
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
