export type Date = {
    year: number;
    month: number;
    day: number;
};

export type CardPost = {
    id: number,
    title: string,
    date: Date,
    timeRead: number,
    categories: string[],
    author: {
        name: string,
        avatar: string
    },
    image: string,
}

