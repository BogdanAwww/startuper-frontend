import React from 'react'
import App from 'next/app'
import type { AppProps, AppContext } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext)

  return { ...appProps }
}

export default MyApp
