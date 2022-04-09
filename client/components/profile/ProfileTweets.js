import React from 'react'
import Post from '../Post'

const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

const tweets = [
  {
    displayName: 'Kenny$$Rekt',
    userName: '0xfe6589068cde0f0733294BD3e76877bA58Db29d9',
    avatar:
      'https://pbs.twimg.com/profile_images/1461791690742710280/cm1V7cin_400x400.jpg',
    text: 'I dey',
    isProfileImageNft: false,
    timestamp: '2022-04-09T09:00:33.000Z',
  },
  {
    displayName: 'Kenny$$Rekt',
    userName: '0xfe6589068cde0f0733294BD3e76877bA58Db29d9',
    avatar:
      'https://pbs.twimg.com/profile_images/1461791690742710280/cm1V7cin_400x400.jpg',
    text: 'I dey',
    isProfileImageNft: false,
    timestamp: '2022-04-09T09:00:33.000Z',
  },
  {
    displayName: 'Kenny$$Rekt',
    userName: '0xfe6589068cde0f0733294BD3e76877bA58Db29d9',
    avatar:
      'https://pbs.twimg.com/profile_images/1461791690742710280/cm1V7cin_400x400.jpg',
    text: 'I dey',
    isProfileImageNft: false,
    timestamp: '2022-04-09T09:00:33.000Z',
  },
  {
    displayName: 'Kenny$$Rekt',
    userName: '0xfe6589068cde0f0733294BD3e76877bA58Db29d9',
    avatar:
      'https://pbs.twimg.com/profile_images/1461791690742710280/cm1V7cin_400x400.jpg',
    text: 'I dey',
    isProfileImageNft: false,
    timestamp: '2022-04-09T09:00:33.000Z',
  },
]

const ProfileTweets = () => {
  return (
    <div className={style.wrapper}>
      {tweets.map((tweet, index) => (
        <div>
          <Post />
        </div>
      ))}
    </div>
  )
}

export default ProfileTweets
