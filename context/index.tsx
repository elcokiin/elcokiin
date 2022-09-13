import { useEffect, useState, useMemo, createContext, useContext } from 'react';

type Theme = 'dark' | 'light' | 'system'
//type Context = {
	//theme: Theme
	//setTheme: (theme: Theme) => void
//}
type Props = {
	children: React.ReactNode
}

// context
const Context = createContext({
	theme: 'system',
	setTheme: () => {}
})

// provider
export function ContextProvider({ children }: Props) {
	const [theme, setTheme] = useState('system')
	//const [lenguage, setLenguage] = useState('es');

	// useEffect
	{}	useEffect(() => {
		const localTheme = localStorage.getItem('theme')
		if (localTheme) {
			setTheme(localTheme as Theme)
		}
	}, [])

	// useMemo
	const values = useMemo(() => ({
			theme,
			setTheme,
			//lenguage,
			//setLenguage,
		}), [theme, setTheme])

	return (
		<Context.Provider value={values}>
			{children}
		</Context.Provider>
	)
}

export function useAppContext() {
	const context = useContext(Context)
	
	if (!context) {
		throw new Error('useAppContext must be used within a ContextProvider')
	}

	return context
}

