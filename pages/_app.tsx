//import { useState, useEffect } from 'react'
//import Head from 'next/head'
import type { AppProps } from 'next/app'

//import { useAppContext, ContextProvider } from '../context'
//import { useSystemTheme } from '../hooks/theme'

import '../styles/colors.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
	//const [localTheme, setLocalTheme] = useState('')
	//const { theme, setTheme } = useAppContext()

	//useEffect(() => {
		//if(theme === 'system') {
			//const systemTheme = useSystemTheme()
			//setLocalTheme(systemTheme)
		//} else {
			//setLocalTheme(theme)
		//}
	//}, [theme])

	return <Component {...pageProps} />
}

export default MyApp
