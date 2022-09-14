import { NextPage } from 'next'
import Link from 'next/link'

import styles from './Categories.module.css'

const Categories: NextPage = () => {
	// call categories from api and render in this component
	/*redirect to specify category depending the api*/
	return (
		<div className={styles.containerCategories}>
			 <div className={styles.container}>
			<Link href="/category">
				<a>
					<span>Programación</span>
				</a>
			</Link>

			<Link href="/category">
				<a>
					<span>Tecnologia</span>
				</a>
			</Link>
			
			<Link href="/category">
				<a>
					<span>Ciencia</span>
				</a>
			</Link>

			<Link href="/category">
				<a>
					<span>Pseudociencia</span>
				</a>
			</Link>
		</div>

		</div>
	)
}

export default Categories

