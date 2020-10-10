import React, { useState, useEffect } from "react"
import Movie from "../moviesManager/Movie"

export default function Rented(props) {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    setMovies([...props.movies])
  }, [props])

  return (
    <div id="rented">
      <h2>Rented:</h2>
      <div id="rented-movies">
        {movies.map((movie, index) => {
          return (
            <Movie
              key={`rm-${index}`}
              movie={movie}
              toggleRentedStatus={props.toggleRentedStatus}
            />
          )
        })}
      </div>
    </div>
  )
}
