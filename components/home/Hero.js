import { useState, useEffect } from 'react'
import requests from '../../requests'
import axios from '../../axios'
import style from '../../styles/home/Hero.module.css'
// API 👇🏽
// https://www.themoviedb.org/?language=en-US

const posterBaseUrl = 'http://image.tmdb.org/t/p/original'

const Hero = () => {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    ;(async () => {
      const req = await axios.get(requests.fetchNetflixOriginals)

      setMovie(
        req.data.results[
          Math.floor(Math.random() * req.data.results.length - 1)
        ],
      )
    })()
  }, [])

  const truncate = (str, n) =>
    str?.length > n ? str.substr(0, n - 1) + '...' : str

  return (
    <div
      className={style.wrapper}
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(${posterBaseUrl}${movie?.backdrop_path})`,
        backgroundPosition: 'center center',
      }}
    >
      <div className={style.contents}>
        {/* Render the title of the video */}
        <h1 className={style.title}>Lorem ipsum</h1>

        <div>
          <button className={style.cta}>Play</button>
          <button className={style.cta}>My List</button>
        </div>

        <h1 className={style.description}>
          {/* Render the overview of the movie */}
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
