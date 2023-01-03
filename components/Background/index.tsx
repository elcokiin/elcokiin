import { NextPage } from 'next'
import styles from './Backgroud.module.css'

const Background: NextPage = () => {
	return (
		<div className={styles.container}>
			<figure className={[styles.elipse, styles.elipse1].join(" ")}></figure>
			<figure className={[styles.elipse, styles.elipse2].join(" ")}></figure>
		</div>
	)
}

export default Background

