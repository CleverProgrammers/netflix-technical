import { useState, useEffect } from 'react'
import requests from '../../requests'
import axios from '../../axios'
import style from '../../styles/home/Hero.module.css'

const posterBaseUrl = 'http://image.tmdb.org/t/p/original'

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
        backgroundImage: `url("${posterBaseUrl}${movie?.backdrop_path}")`,
        backgroundPosition: 'center center',
      }}
    >
      <div className={style.contents}>
        <h1 className={style.title}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div>
          <button className={style.cta}>Play</button>
          <button className={style.cta}>My List</button>
        </div>

        <h1 className={style.description}>{truncate(movie?.overview, 150)}</h1>
      </div>

      <div className={style.fadeBottom} />
    </div>
  )
}

export default Hero
