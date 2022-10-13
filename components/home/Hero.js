import { useState, useEffect } from 'react'
import requests from '../../requests'
import axios from '../../axios'
import style from '../../styles/home/Hero.module.css'

const posterBaseUrl = 'http://image.tmdb.org/t/p/original'

//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbVQQ8FJsAd3bLr_3pL4Wyf8WcZA-ZGn3WUg&usqp=CAU

const Hero = () => {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    // Fetch a random movie from the API
    // Set the movie to the state.
  }, [])

  const truncate = (str, n) =>
    str?.length > n ? str.substr(0, n - 1) + '...' : str

  return (
    <div
      className={style.wrapper}
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbVQQ8FJsAd3bLr_3pL4Wyf8WcZA-ZGn3WUg&usqp=CAU")`,
        backgroundPosition: 'center center',
      }}
    >
      <div className={style.contents}>
        <h1 className={style.title}>Lorem ipsum</h1>

        <div>
          <button className={style.cta}>Play</button>
          <button className={style.cta}>My List</button>
        </div>

        <h1 className={style.description}>
          {truncate(
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt doloribus quia vitae ullam illo velit delectus inventore reprehenderit amet, placeat assumenda unde obcaecati. Sequi tempora a dolor culpa vel nulla',
            150,
          )}
        </h1>
      </div>

      <div className={style.fadeBottom} />
    </div>
  )
}

export default Hero
