import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header.js'
import Banner from '../components/Banner.js'
import Categories from '../components/Categories.js'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Header/>
    {/* <Banner/> */}
    <Categories/>


    </div>
  )
}

export default Home
