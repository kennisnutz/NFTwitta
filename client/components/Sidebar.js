import { FiMoreHorizontal } from 'react-icons/fi'
import { VscTwitter, vscTwitter } from 'react-icons/vsc'
import SideBarOption from './SideBarOption'
import { useState } from 'react'

const style = {
  wrapper: `flex-[0.7] px-8 flex flex-col`,
  twitterIconContainer: `text-3xl m-4`,
  tweetButton: `bg-[#1d9bf0] hover:bg-[#1b8cd8] flex items-center justify-center font-bold rounded-3xl h-[50px] mt-[20px] cursor-pointer`,
  navContainer: `flex-1`,
  profileButton: `flex items-center mb-6 cursor-pointer hover:bg-[#333c45] rounded-[100px] p-2`,
  profileLeft: `flex item-center justify-center mr-4`,
  profileImage: `height-12 w-12 rounded-full`,
  profileRight: `flex-1 flex`,
  details: `flex-1`,
  name: `text-lg`,
  handle: `text-[#8899a6]`,
  moreContainer: `flex items-center mr-2`,
}

function Sidebar({ initialSelectedIcon = 'Home' }) {
  const [selected, setSelected] = useState('Home')
  return (
    <div className={style.wrapper}>
      <div className={style.twitterIconContainer}>
        <VscTwitter />
      </div>
      <div className={style.navContainer}>
        <SideBarOption
          Icon={selected === 'Home' ? VscTwitter : VscTwitter}
          text="Home"
          isActive={Boolean(selected === 'Home')}
          setSelected={selected}
          redirect={'/'}
        />
        <div>Explore</div>
        <div>Notifications</div>
        <div>Messages</div>
        <div>Bookmarks</div>
        <div>Lists</div>
        <div>Profile</div>
        <div>More</div>
        <div className={style.tweetButton}>Mint</div>
      </div>
      <div className={style.profileButton}>
        <div className={style.profileLeft}></div>
        <div className={style.profileRight}>
          <div className={style.details}>
            <div className={style.name}>Kenny$$hillz</div>
            <div className={style.handle}>@0x82083...56c4jH839</div>
          </div>
          <div className={style.moreContainer}>
            <FiMoreHorizontal />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
