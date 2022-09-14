import { useState } from 'react'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import Menu from '../Menu'

import { GiHamburgerMenu } from 'react-icons/gi'

import styles from './Header.module.css'

const Header: NextPage = () => {
	const [showMenu, setShowMenu] = useState(false)
	
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
				onClick={() => setShowMenu(!showMenu)}
			/>

			{
				showMenu && <Menu />
			}
		</div>
	)
}

export default Header

