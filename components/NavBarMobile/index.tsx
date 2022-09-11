import { NextPage } from 'next'
import Link from 'next/link'

// Icons
import {
	AiOutlineHome,
	AiOutlinePlusCircle,
	AiOutlineUser,
	AiOutlineSearch
} from 'react-icons/ai'

import styles from './NavBarMobile.module.css'

const NavBarMobile: NextPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.navbar}>
				<Link href="/">
					<a className={styles.link}>
						<AiOutlineHome className={styles.icon} />
					</a>
				</Link>
				<Link href="/create">
					<a className={styles.link}>
						<AiOutlinePlusCircle className={styles.icon} />
					</a>
				</Link>
				<Link href="/search">
					<a className={styles.link}>
						<AiOutlineSearch className={styles.icon} />
					</a>
				</Link>
				<Link href="/profile">
					<a className={styles.link}>
						<AiOutlineUser className={styles.icon} />
					</a>
				</Link>
			</div>
		</div>
	)
}

export default NavBarMobile

