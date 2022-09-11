import { NextPage } from 'next'
import styles from './Backgroud.module.css'

const Background: NextPage = () => {
	return (
		<div className={styles.container}>
			<figure className={[styles.elipse, styles.elipse1].join(" ")}>hello</figure>
			<figure className={[styles.elipse, styles.elipse2].join(" ")}>hello</figure>
		</div>
	)
}

export default Background

