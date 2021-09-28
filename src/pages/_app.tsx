import React, { useRef } from 'react'
import App from 'next/app'
import type { AppProps, AppContext } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

function MyApp ({ Component, pageProps }: AppProps) {
  const queryClient = useRef(new QueryClient())

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient.current}>
        <Component {...pageProps} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext)

  return { ...appProps }
}

export default MyApp
