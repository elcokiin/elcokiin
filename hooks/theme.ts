import { useState, useEffect } from 'react'
import { useAppContext } from '../context'

type Theme = 'dark' | 'light' | 'system'
type UseSystemTheme = {
	theme: Theme
	setTheme: (theme: Theme) => void
}

function getSystemTheme(): Theme {
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function useSystemTheme(): UseSystemTheme {
	const [localTheme, setLocalTheme] = useState<Theme>('')
	const { theme, setTheme } = useAppContext()

	useEffect(() => {
		if(theme === 'system') {
			const systemTheme = getSystemTheme()
			setTheme(systemTheme)
			setLocalTheme(systemTheme)
			const listener = () => setTheme(systemTheme)
			window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', listener)
		}
	}, [theme])

	return { localTheme, setTheme }
}

