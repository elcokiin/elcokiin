import type { AppProps } from 'next/app'
import Head from 'next/head'

import { Provider } from 'react-redux'
import store from '../store/store'

import '../styles/colors.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Head>
				<title>Inicio - elcokiin</title>
				<meta name="description" content="Place to write and read other people" />
				<link rel="icon" href="/mouse-circle.png" />
			</Head>
			<Component {...pageProps} />
		</Provider>
	)
}

export default MyApp
