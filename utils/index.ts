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