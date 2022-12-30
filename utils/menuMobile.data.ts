// icons
import { RiComputerLine } from 'react-icons/ri'
import { BsSun } from 'react-icons/bs'
import { FiMoon } from 'react-icons/fi'

// utils
import { setTheme, getSystemTheme } from './index'

export const buttonsLanguage = [
    {
        id: 1,
        icon: "/united-states.png",
        name: 'english',
        activated: false,
        lang: 'en',
    },
    {
        id: 2,
        icon: "/colombia.png",
        name: 'español',
        activated: true,
        lang: 'es',
    },
]

export const buttonsTheme = [
    {
        id: 'system0',
        name: 'sistema',
        nameEn: 'system',
        icon: RiComputerLine,
        activated: true,
        function: (dispatch: any) => setTheme({dispatch, payload: "system"}),
    },
    {
        id: 'light1',
        name: 'claro',
        nameEn: 'light',
        icon: BsSun,
        activated: false,
        function: (dispatch: any) => setTheme({dispatch, payload: "light"}),
    },
    {
        id: 'dark2',
        name: 'oscuro',
        nameEn: 'dark',
        icon: FiMoon,
        activated: false,
        function: (dispatch: any) => setTheme({dispatch, payload: "dark"}),
    }
]
