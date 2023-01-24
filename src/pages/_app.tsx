import '@/styles/globals.css'
import { defaultTheme } from '@/styles/themes/default'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import DefaultLayout from '@/layouts/DefaultLayout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ThemeProvider>
  )
}
