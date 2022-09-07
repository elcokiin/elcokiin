import { useState, useMemo, createContext, useContext } from 'react';
import { Context } from './types';

type Theme = 'dark' | 'light' | 'system'
// context
const Context = createContext<Context>({
	theme: 'system',
	setTheme: () => {},
	//lenguage: 'en',
	//setLenguage: () => {},
})

// provider
export function ContextProvider({ children }) {
	const [theme, setTheme] = useState<Theme>('system')
	//const [lenguage, setLenguage] = useState('es');

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

