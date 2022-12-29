import type { NextPage } from 'next'

import styles from './CategoryButton.module.css'

type CategoryButtonProps = {
    children: string
}

const CategoryButton: NextPage<CategoryButtonProps> = ( { children }: CategoryButtonProps ) => {
    return (
        <button className={styles.container}>
            {children}
        </button>
    )
}

export default CategoryButton
