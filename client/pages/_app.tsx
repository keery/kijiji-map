import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import NextApp, { AppProps } from 'next/app'
import '../styles/globals.css'
import theme from '../theme'
import { client } from '~api/client-react-query'
import AppHead from '~components/AppHead'
import { QueryClientProvider } from 'react-query'
import { appWithTranslation } from 'next-i18next'
import 'swiper/swiper-bundle.min.css'
import mixpanel from 'mixpanel-browser'

const App = ({ Component, pageProps }: AppProps) => {
  mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN)
  const content = (
    <>
      <AppHead />
      <QueryClientProvider client={client}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </QueryClientProvider>
    </>
  )

  return content
}

App.getInitialProps = async (appContext) => {
  const appProps = await NextApp.getInitialProps(appContext)
  return { ...appProps }
}

export default appWithTranslation(App)
