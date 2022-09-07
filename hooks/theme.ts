import { useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

function getSystemTheme(): Theme {
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function useSystemTheme(): Theme {
	const [theme, setTheme] = useState<Theme>(getSystemTheme())

	useEffect(() => {
		const listener = () => setTheme(getSystemTheme());
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', listener);
		return () => window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', listener);
	}, []);

	return theme;
}

