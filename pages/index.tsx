import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
	//console.log(window.matchMedia('(prefers-color-scheme: dark)').matches)

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Place to write and read other people" />
        <link rel="icon" href="/mouse-dark.png" />
			</Head>
			<h1>Home</h1>
		</div>
  )
}

export default Home
