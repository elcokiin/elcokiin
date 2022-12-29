import type { NextPage } from 'next'
import Image from 'next/image'

// components
import CategoryButton from '../buttons/CategoryButton'


import styles from './CardPost.module.css'

import { CardPost } from '../../types'

import { getMounthByNumber } from '../../utils'

type CardPostProps = {
	cardPost: CardPost
}

const CardPost: NextPage<CardPostProps> = ( { cardPost }: CardPostProps ) => {
	return (
		<article className={styles.container}>
			<div className={ styles.containerAuthor}>
				<div className={ styles.author }>
					<figure>
						<Image
							src={cardPost.author.avatar}
							alt={cardPost.author.name}
							width={32}
							height={32}
							className={styles.avatar}
						/>
					</figure>
					<span>{cardPost.author.name}</span>
				</div>
			</div>
			<div className={styles.content}>
				<div className={styles.info}>
					<h2 className={styles.title}>{cardPost.title}</h2>
						<span className={styles.dateTime}>{getMounthByNumber(cardPost.date.month).slice(0, 3)} {cardPost.date.day} - {cardPost.timeRead} min read</span>
				</div>
				<div>
					<Image
						src={cardPost.image}
						alt={cardPost.title}
						width={70}
						height={42}
						className={styles.image}
					/>
				</div>
			</div>
			<div className={styles.categories}>
				{cardPost.categories.map((category, index) => (
					<CategoryButton key={index}>{category}</CategoryButton>
				))}
			</div>
		</article>
	)
}

export default CardPost
