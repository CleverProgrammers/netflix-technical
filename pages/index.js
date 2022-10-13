import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import style from '../styles/home/Home.module.css'
import Login from '../components/home/Login'
import Main from '../components/home/Main'

const Home = () => {
  const router = useRouter()

  return (
    <div className={style.appWrapper}>
      <Head>
        <title>Netflix | Clever Programmer</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Main />
    </div>
  )
}

export default Home
