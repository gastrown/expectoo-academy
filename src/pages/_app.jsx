
import '@/styles/tailwind.css'
import 'focus-visible'

import ReactGA from 'react-ga'
export default function App ({ Component, pageProps }) {
  ReactGA.initialize('G-EHW63WPZPZ')

  return <Component {...pageProps} />
}
