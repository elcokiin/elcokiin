import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { GiHamburgerMenu } from 'react-icons/gi'

import styles from './Header.module.css'

const Header: NextPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.containerLogo}>
				<Link href="/" className={styles.logo}>
					<a>
						<Image src="/mouse-dark.png" alt="logo" width={72} height={72} />
					</a>
				</Link>
				<h1>Inicio</h1>
			</div>
			<GiHamburgerMenu 
				className={styles.hamburger}
				onClick={() => alert('click')}
			/>
		</div>
	)
}

export default Header

