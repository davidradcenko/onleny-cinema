import MainProvider from 'api/providers/MainProvider'
import type { AppProps } from 'next/app'

import '@/assets/styles/globals.scss'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainProvider>
      <Component {...pageProps} />
    </MainProvider>
  )
}