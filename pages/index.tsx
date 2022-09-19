import type { NextPage } from 'next'
//import { useState } from 'react'
import Head from 'next/head'
//import { useAppContext } from '../context'

// components
import Backgroud from '../components/Background'
import Header from '../components/Header'
import Categories from '../components/Categories'
import NavBarMobile from '../components/NavBarMobile'
import Menu from '../components/Menu'

// styles
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
	// for the moment, use props to pass the data
	//const [menu, setMenu] = useState(false)
  return (
		<div className={styles.container}>
      <Head>
        <title>Inicio - elcokiin</title>
        <meta name="description" content="Place to write and read other people" />
        <link rel="icon" href="/mouse-dark.png" />
			</Head>

			<Menu /> 

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
