import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

import GlobalStyles from '../styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Oncrets</title>
        <link rel="shortcut icon" href="/img/iconOncretsAzul.png" />
        <link rel="apple-touch-icon" href="/img/iconOncretsAzul.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#006DB6" />
        <meta
          name="description"
          content="Stay tuned to experience the first worldwide post-tensioning platform"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
