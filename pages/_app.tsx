//import Head from 'next/head'
import type { AppProps } from 'next/app'
import { ContextProvider } from '../context'

import '../styles/colors.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ContextProvider>
			<Component {...pageProps} />
		</ContextProvider>
	)
}

export default MyApp
