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
        <link rel="icon" href="/mouse-dark.png" />
			</Head>

			<NavBarMobile />
			<Backgroud />

			<header className={styles.containerHeader}>
				<Header />
				<Categories />
			</header>

			<main>
				<h1>Home</h1>
				<h3>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).	
				</h3>
			</main>


			<footer></footer>
		</div>
  )
}

export default Home
