import '@/styles/globals.css'
import { defaultTheme } from '@/styles/themes/default'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import DefaultLayout from '@/layouts/DefaultLayout'
import { CartContextProvider } from '@/contexts/CartContent'
import { store } from '@/redux/store'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Provider store={store}>
        <CartContextProvider>
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        </CartContextProvider>
      </Provider>
    </ThemeProvider>
  )
}
