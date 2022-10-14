import React, { useEffect, useState } from 'react'

import Movie from './components/Movie'

const FEATURED_API =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7ecd0b11bc4cd387a22b43cb37086584'
// const SEARCH_API =
//   'https://api.themoviedb.org/3/search/movie?&api_key=7ecd0b11bc4cd387a22b43cb37086584&query='

function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results)
      })
  }, [])

  return (
    <div className="movie-container">
      {movies.map((movie) => (
        <Movie key={movie.id} {...movie} />
      ))}
    </div>
  )
}

export default App
