import type { NextPage } from 'next'
import Head from 'next/head'
//import { useAppContext } from '../context'

// components
import Backgroud from '../components/Background'
import Header from '../components/Header'
import Categories from '../components/Categories'
import NavBarMobile from '../components/NavBarMobile'

// styles
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
	//const { theme, setTheme } = useAppContext()

  return (
		<div className={styles.container}>
      <Head>
        <title>Inicio - elcokiin</title>
        <meta name="description" content="Place to write and read other people" />
        <link rel="icon" href="/mouse-light.png" />
			</Head>

			<NavBarMobile />
			<Backgroud />

			<header className={styles.containerHeader}>
				<Header />
				<Categories />
			</header>

			<main></main>


			<footer></footer>
		</div>
  )
}

export default Home
