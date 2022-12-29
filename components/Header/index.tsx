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
						<Image src="/mouse-circle.png" alt="logo" width={52} height={52} />
					</a>
				</Link>
				<h1>Inicio</h1>
			</div>
			<Link href="/menuMobile">
				<a>
					<GiHamburgerMenu className={styles.hamburger} />
				</a>
			</Link>
		</div>
	)
}

export default Header

