import React, { useState, useEffect } from "react"
import Movie from "./moviesManager/Movie"
import Rented from "./rentingManager/Rented"
import Search from "./searchManager/Search"
import Budget from "./budgetManager/Budget"
import "../../styles/catalog.css"

export default function Catalog(props) {
  const [search, setSearch] = useState("")
  const [movies, setMovies] = useState([...props.movies])
  const [rented, setRented] = useState([...props.rented])
  const [filteredMovies, setFilteredMovies] = useState([...movies])
  const [filteredRented, setFilteredRented] = useState([...rented])

  useEffect(() => {
    setMovies([...props.movies])
    setRented([...props.rented])
  }, [props])

  const changeSearch = (e) => {
    setSearch(e.target.value)
  }
  useEffect(() => {
    if (search.length) {
      const validMovies = []
      movies.forEach((m) => {
        let movieTitle = m.title.toLowerCase()
        let searchedValue = search.toLowerCase()
        if (movieTitle.includes(searchedValue)) {
          validMovies.push(m)
        }
      })
      setFilteredMovies(validMovies)
      const validRented = []
      rented.forEach((r) => {
        let movieTitle = r.title.toLowerCase()
        let searchedValue = search.toLowerCase()
        if (movieTitle.includes(searchedValue)) {
          validRented.push(r)
        }
      })
      setFilteredRented(validRented)
    } else {
      setFilteredMovies([...movies])
      setFilteredRented([...rented])
    }
  }, [search, movies, rented])

  if (!props.isActiveTab) {
    props.setActiveTab("catalog")
  }
  return (
    <div id="catalog">
      <div className="header">
        <h2>Catalog:</h2>
        <Search onChange={changeSearch} />
        <Budget budget={props.budget} />
      </div>
      <div className="main">
        {filteredRented.length ? (
          <Rented
            toggleRentedStatus={props.toggleRentedStatus}
            movies={filteredRented}
          />
        ) : null}
        <h2>All Movies:</h2>
        <div id="all-movies">
          {filteredMovies.map((movie, index) => {
            return (
              <Movie
                key={`m-${index}`}
                movie={movie}
                toggleRentedStatus={props.toggleRentedStatus}
                budget={props.budget}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
