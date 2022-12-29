//import Head from 'next/head'
import type { AppProps } from 'next/app'
import Head from 'next/head'

// import { wrapper } from '../store/store.ts'

import '../styles/colors.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div>
			<Head>
				<title>Inicio - elcokiin</title>
        		<meta name="description" content="Place to write and read other people" />
				<link rel="icon" href="/mouse-circle.png" />
			</Head>
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp
