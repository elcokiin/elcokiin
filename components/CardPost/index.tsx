import type { NextPage } from 'next'
import Image from 'next/image'

import styles from './CardPost.module.css'

import { CardPost } from '../../types'

import { getMounthByNumber } from '../../utils'

type CardPostProps = {
	cardPost: CardPost
}

const CardPost: NextPage<CardPostProps> = ( { cardPost }: CardPostProps ) => {
	return (
		<article className={styles.container}>
			<div className={ styles.author }>
				<Image
					src={cardPost.author.avatar}
					alt={cardPost.author.name}
					width={40}
					height={40}
					className={styles.avatar}
				/>
				<span>{cardPost.author.name}</span>
			</div>
			<div className={styles.content}>
				<div>
					<h1>{cardPost.title}</h1>
					<div>
						<span>{cardPost.date.day}</span>
						<span>{getMounthByNumber(cardPost.date.month)}</span>
						{/* not present year */}
					</div>
				</div>
			</div>
		</article>
	)
}

export default CardPost
