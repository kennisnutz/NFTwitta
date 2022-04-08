import React from 'react'
import { useState } from 'react'

const style = {
  wrapper: `px-4 flex flex-row border-b border-[#38444d] pb-4`,
  tweetBoxLeft: `mr-4`,
  tweetBoxRight: `flex-1`,
  profileImage: `height-12 w-12 rounded-full`,
  inputField: `w-full h-full outline-none bg-transparent text-lg`,
  formLowerContainer: `flex`,
  iconsContainer: `text-[#1d9bf0] flex flex-1 items-center`,
  icon: `mr-2`,
  submitGeneral: `px-6 py-2 rounded-3xl font-bold`,
  inactiveSubmit: `bg-[#196195] text-[#95999e]`,
  activeSubmit: `bg-[#1d9bf0] text-white`,
}

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState('')
  console.log(tweetMessage)
  return (
    <div className={style.wrapper}>
      <div className={style.tweetBoxLeft}>
        <img
          src="https://pbs.twimg.com/profile_images/1461791690742710280/cm1V7cin_400x400.jpg"
          alt="profile Image"
          className={style.profileImage}
        />
      </div>
      <div className={style.tweetBoxRight}>
        <form action="submit">
          <textarea
            className={style.inputField}
            placeholder="what the deal yo?"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
          />
          <div className={style.formLowerContainer}>
            <div className={style.iconsContainer}></div>
            <button
              type="submit"
              className={`${style.submitGeneral} ${
                tweetMessage ? style.activeSubmit : style.inactiveSubmit
              }`}
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TweetBox
