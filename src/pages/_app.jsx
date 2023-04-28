import { initGA } from '@/analytics'
import '@/styles/tailwind.css'
import 'focus-visible'
import { useEffect } from 'react'

export default function App ({ Component, pageProps }) {
  useEffect(() => {
    initGA()
  }, [])
  return <Component {...pageProps} />
}
