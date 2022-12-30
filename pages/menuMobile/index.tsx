import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

//redux
import { useDispatch, useSelector } from 'react-redux'

// components
import Footer from '../../components/Footer'

// icons
import { AiOutlineClose } from 'react-icons/ai'
import { RiAccountCircleLine } from 'react-icons/ri'

// data
import { buttonsTheme, buttonsLanguage } from '../../utils/menuMobile.data' 
// styles
import styles from './Menu.module.css'

const Menu: NextPage = () => {
	const dispatch = useDispatch()
	const { theme } = useSelector((state: any) => state.theme)

	return (
		<div className={styles.container}>
			<Head>
				<title>Menu - elcokiin</title>
			</Head>
			<div className={styles.header}>
				<RiAccountCircleLine className={styles.icon} />
				<Link href="/">
					<a>
						<AiOutlineClose className={styles.icon}	/>
					</a>
				</Link>
			</div>
			<main className={styles.main}>
				<section>
					<h3>Tema</h3>
					<div className={styles.containerButtons}>
						{buttonsTheme.map((button) => (
							<button
								key={button.id}
								className={[styles.button, theme === button.nameEn && styles.activated].join(' ')}
								onClick={button.function(dispatch)}
							>
								{ button.name.charAt(0).toUpperCase() + button.name.slice(1) }
								<button.icon className={styles.iconSmall} />
							</button>
						))}
					</div>
				</section>
				<section>
					<h3>Idioma</h3>
					<div className={styles.containerButtons}>
						{buttonsLanguage.map((button) => (
							<button 
								key={button.id} 
								className={[styles.button, button.activated && styles.activated].join(' ')}
						>
								{ button.name.charAt(0).toUpperCase() + button.name.slice(1) }
								<Image src={button.icon} alt={button.name} width={20} height={20} />
							</button>
						))}
					</div>
				</section>
			</main>

			<div className={styles.containerNoLogin}>
				<button className={[styles.button, styles.noLogin].join(' ')}>Cerrar sesión</button>
			</div>

			<Footer />

		</div>
	)
}

export default Menu
