import React, { useEffect, useState } from 'react'

import Movie from './components/Movie'

const FEATURED_API =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7ecd0b11bc4cd387a22b43cb37086584'
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?&api_key=7ecd0b11bc4cd387a22b43cb37086584&query='

function App() {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    getMovies(FEATURED_API)
  }, [])

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results)
      })
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()

    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm)

      setSearchTerm('')
    }
  }

  const handleOnChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <>
      <header>
        <form onSubmit={handleOnSubmit}>
          <input
            className="search"
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>
      <div className="movie-container">
        {movies.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
    </>
  )
}

export default App
