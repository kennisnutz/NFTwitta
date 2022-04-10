import '../styles/globals.css'
import '../lib/hexStyles.css'
import { NFTTwittaProvider } from '../context/NFTTwittaContext'

function MyApp({ Component, pageProps }) {
  return (
    <NFTTwittaProvider>
      <Component {...pageProps} />
    </NFTTwittaProvider>
  )
}

export default MyApp
