import { NextPage } from 'next'

// icons
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { AiOutlineGithub } from 'react-icons/ai'

import styles from './Footer.module.css'

const Footer: NextPage = () => {
	const media = [
		{
			id: 1,
			icon: AiOutlineTwitter,
			name: 'twitter',
			link: 'https://twitter.com/elcokiin',
		},
		{
			id: 2,
			icon: AiOutlineInstagram,
			name: 'instagram',
			link: 'https://www.instagram.com/elcokiin/',
		},
		{
			id: 3,
			icon: AiOutlineLinkedin,
			name: 'linkedin',
			link: 'https://www.linkedin.com/in/elcokiin/',
		},
		{
			id: 4,
			icon: AiOutlineGithub,
			name: 'github',
			link: 'https://www.github.com/elcokiin/',
		},
	]

	return (
		<footer className={ styles.container }>
			<div className={ styles.text }>
				<p>Diego Tenjo </p>
				<p>@elcokiin</p>
				<p>© 2022</p>
			</div>	
			<div className={ styles.links }>
				{ media.map( (item) => (
					<a 
						href={ item.link }
						target="_blank"
						rel="noreferrer"
						key={ item.id }
					>
						<item.icon className={ styles.icon } />
					</a>
				))}
			</div>	
		</footer>
	);
}

export default Footer
