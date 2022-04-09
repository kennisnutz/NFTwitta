import { BsStars } from 'react-icons/bs'
import TweetBox from './TweetBox'
import Post from '../Post'

const style = {
  wrapper: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
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

function Feed() {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.headerTitle}>Home</div>
        <BsStars />
      </div>
      <TweetBox />
      {tweets.map((tweet, index) => (
        <Post
          key={index}
          displayName={tweet.displayName}
          userName={`${tweet.userName.slice(0, 4)}...${tweet.userName.slice(
            -4
          )}`}
          avatar={tweet.avatar}
          text={tweet.text}
          isProfileImageNft={tweet.isProfileImageNft}
          timestamp={tweet.timestamp}
        />
      ))}
    </div>
  )
}

export default Feed
