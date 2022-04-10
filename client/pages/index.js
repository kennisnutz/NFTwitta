import Sidebar from '../components/Sidebar'
import Feed from '../components/home/Feed'
import Widgets from '../components/Widgets'
import metamaskLogo from '../assets/metamask.png'
import errorImg from '../assets/error.png'
import checkImg from '../assets/check.png'
import Image from 'next/image'
import { useContext } from 'react'
import { NFTTwittaContext } from '../context/NFTTwittaContext'

const style = {
  wrapper: `flex h-full justify-center  w-screen select-none bg-[#15202b] text-white`,
  content: `max-w-[1400px] w-3/3 flex justify-between `,
  loginContainer: `w-full h-full flex flex-col justify-center items-center pb-48`,
  walletConnectButton: `text-2xl text-black bg-white font-bold mb-[-3rem] mt-[3rem] px-6 py-4 rounded-full cursor-pointer hover:bg-[#d7dbdc]`,
  loginContent: `text-3xl font-bold text-center mt-24`,
}

export default function Home() {
  const { appStatus, connectToWallet } = useContext(NFTTwittaContext)

  const app = (status = appStatus) => {
    switch (status) {
      case 'connected':
        return userLoggedIn

      case 'notConnected':
        return noUserFound

      case 'noMetamask':
        return noMetamaskFound

      case 'error':
        return error

      default:
        return loading
    }
  }

  const userLoggedIn = (
    <div className={style.content}>
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  )
  const noUserFound = (
    <div className={style.loginContainer}>
      <Image src={metamaskLogo} height={200} width={200} />
      <div
        className={style.walletConnectButton}
        onClick={() => connectToWallet()}
      >
        connect to wallet
      </div>
      <div className={style.loginContent}>connect to wallet</div>
    </div>
  )
  const noMetamaskFound = (
    <div className={style.loginContainer}>
      <Image src={metamaskLogo} height={200} width={200} />
      <div className={style.loginContent}>
        <a
          target="_blank"
          rel="noreferrer"
          href={'https://metamask.io/download.html'}
        >
          you need to download and install Metamask, a<br /> virtual Ethereum
          wallet in your browser.
        </a>
      </div>
    </div>
  )
  const error = (
    <div className={style.loginContainer}>
      <Image src={errorImg} height={250} width={250} />
      <div className={style.loginContent}>
        An error occurred. Please try again later or use another browser
      </div>
    </div>
  )

  const loading = (
    <div className={style.loginContainer}>
      <div className={style.loginContent}>loading ...</div>
    </div>
  )
  return <div className={style.wrapper}>{app(appStatus)}</div>
}
