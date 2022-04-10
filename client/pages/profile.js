import React from 'react'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'
import ProfileHeader from '../components/profile/ProfileHeader'
import ProfileTweets from '../components/profile/ProfileTweets'
const style = {
  wrapper: `flex justify-center w-screen select-none bg-[#15202b] text-white h-full`,
  content: `max-w-[1400px] w-3/3 flex justify-between `,
  mainContent: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
}

const profile = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <Sidebar />
        <div className={style.mainContent}>
          <ProfileHeader />
          <ProfileTweets />
        </div>
        <Widgets />
      </div>
    </div>
  )
}

export default profile
