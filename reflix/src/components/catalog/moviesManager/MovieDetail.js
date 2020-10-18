import React, { useEffect } from "react"
import { Link, Redirect } from "react-router-dom"
import Movie from "./Movie"
import Budget from "../budgetManager/Budget"
import "../../../styles/movieDetail.css"

export default function MovieDetail(props) {
  useEffect(() => {
    if (!props.isActiveTab) {
      props.setActiveTab("catalog")
    }
  }, [props])

  const movieId = props.match.params.id
  const movies = props.movies
  const movie = movies.find((m) => m.id === parseInt(movieId))

  return movie ? (
    <div id="movie-detail" data-id={movie.id}>
      <Budget budget={props.budget} />
      <Link to={`/catalog`} className="back-btn">
        {"< Back"}
      </Link>
      <h2 className="movie-title-year">
        {movie.title} ({movie.year})
      </h2>
      <Movie movie={movie} toggleRentedStatus={props.toggleRentedStatus} />
      <div className="movie-description">
        <h4>Plot Summary:</h4> <p>{movie.descrShort}</p>
      </div>
    </div>
  ) : (
    <Redirect to={`/catalog`} />
  )
}