import { NextPage } from 'next'
import Image from 'next/image'

import Footer from '../Footer'
// icons
import { AiOutlineClose } from 'react-icons/ai'
import { RiAccountCircleLine } from 'react-icons/ri'
import { RiComputerLine } from 'react-icons/ri'
import { BsSun } from 'react-icons/bs'
import { FiMoon } from 'react-icons/fi'


import styles from './Menu.module.css'

const Menu: NextPage = () => {
	const buttonsLanguage = [
		{
			id: 1,
			icon: "/united-states.png",
			name: 'english',
			activated: false,
			lang: 'en',
		},
		{
			id: 2,
			icon: "/colombia.png",
			name: 'español',
			activated: true,
			lang: 'es',
		},
	]

	const buttonsTheme = [
		{
			id: 'system0',
			name: 'sistema',
			icon: RiComputerLine,
			activated: true,
			function: () => console.log('system')
		},
		{
			id: 'light1',
			name: 'claro',
			icon: BsSun,
			activated: false,
			function: () => console.log('light')
		},
		{
			id: 'dark2',
			name: 'oscuro',
			icon: FiMoon,
			activated: false,
			function: () => console.log('dark')
		}
	]

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<RiAccountCircleLine className={styles.icon} />
				<AiOutlineClose className={styles.icon}/>
			</div>
			<main className={styles.main}>
				<section>
					<h3>Tema</h3>
					<div className={styles.containerButtons}>
						{buttonsTheme.map((button) => (
							<button
								key={button.id}
								className={[styles.button, button.activated && styles.activated].join(' ')}
								onClick={button.function}
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
