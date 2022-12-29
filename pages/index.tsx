import type { NextPage } from 'next'
import Head from 'next/head'
//import { useAppContext } from '../context'

// components
import Backgroud from '../components/Background'
import Header from '../components/Header'
import Categories from '../components/Categories'
import NavBarMobile from '../components/NavBarMobile'
import Posts from '../components/Posts'
import Footer from '../components/Footer'

// styles
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
	return (
		<div>
			<div className={styles.container}>
				<Head>
					<title>Inicio - elcokiin</title>
					<meta name="description" content="Place to write and read other people" />
					<link rel="icon" href="/mouse-circle.png" />
				</Head>

				<Backgroud />

				<header className={styles.containerHeader}>
					<Header />
					<Categories />
				</header>

				<main>
					<Posts />
				</main>
			</div>

			<NavBarMobile />
			<Footer />
		</div>
	)
}

export default Home
