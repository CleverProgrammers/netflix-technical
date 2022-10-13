import Image from 'next/image'
import { useState, useEffect } from 'react'
import axios from '../../axios'
import style from '../../styles/home/Row.module.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'
// API 👇🏽
// https://www.themoviedb.org/?language=en-US

const posterBaseUrl = 'https://image.tmdb.org/t/p/original'

const Row = ({ title, fetchUrl, isLargeRow }) => {
  // Create Static Data to render on the screen
  // Data needed in the Row component: movie id and url image.

  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState('')

  useEffect(() => {
    // Fetch the movies from the API
    // Set the movies to the state.
  }, [fetchUrl])

  const opts = {
    height: '600',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  }

  const handleClick = movie => {
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      movieTrailer(movie?.name || '')
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search)

          setTrailerUrl(urlParams.get('v'))
        })
        .catch(error => console.error(error.message))
    }
  }

  return (
    <div className={style.wrapper}>
      <h2>{title}</h2>

      {/* 1. map through the movies */}
      {/* 2. Conditionally render the styling for the large posters and small posters. */}
      <div className={style.postersContainer}></div>

      {trailerUrl && <YouTube videoId={trailerUrl} opt={opts} />}
    </div>
  )
}

export default Row
