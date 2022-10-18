import type { NextPage } from 'next'

import CardPost from '../CardPost'

import styles from './Posts.module.css'

import { posts } from './posts.data'

const Posts: NextPage = () => {
    return (
        <section className={styles.container}>
            {
                posts.map((post) => (
                    <CardPost key={post.id} cardPost={post} />
                ))
            }
        </section> 
    )
}

export default Posts