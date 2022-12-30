export const getMounthByNumber = ( mounthNumber: number ): string => {
    const mounths = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]

    return mounths[mounthNumber - 1]
}
// THEMES

interface ITheme {
    dispatch: any,
    payload: string
}

export const setTheme = ({dispatch, payload} : ITheme) => {
    return () => {
        dispatch({ type: "SET_THEME", payload })
    }
}

export const getSystemTheme = (): string => {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

    return systemTheme
}