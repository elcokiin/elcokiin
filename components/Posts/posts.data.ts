
import type { CardPost } from "../../types"

export const posts: CardPost[] = [
    {
        id: 1,
		title: 'Lorem ipsum dolor sit amet.',
		date: {
            year: 2020,
            month: 1,
            day: 1
        },
		timeRead: 5,
		categories: ['React', 'Next.js', 'Typescript'],
		author: {
			name: 'John Doe',
			avatar: '/gato-ufo.jfif'
		},
		image: '/cover-space.jfif'
    },
    {
        id: 2,
        title: 'Mind blowing post',
        date: {
            year: 2022,
            month: 3,
            day: 4
        },
        timeRead: 2,
        categories: ['Psychology', 'Health'],
        author: {
            name: 'Diego Tenjo',
            avatar: '/gato-ufo.jfif'
        },
        image: '/cover-space.jfif'
    },
    {
        id: 3,
        title: 'UFO',
        date: {
            year: 2021,
            month: 5,
            day: 25
        },
        timeRead: 8,
        categories: ['Pseudo-science'],
        author: {
            name: 'John Doe',
            avatar: '/gato-ufo.jfif'
        },
        image: '/cover-space.jfif'
    },
]