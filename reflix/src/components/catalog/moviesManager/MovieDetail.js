import React, { Component } from "react"
import { Link, Redirect } from "react-router-dom"
import RentingHandler from "../rentingManager/RentingHandler"

class MovieDetail extends Component {
  render() {
    const movieId = this.props.match.params.id
    const movies = this.props.state.movies
    const movie = movies.find((m) => m.id == movieId)

    return movie ? (
      <div id="movie-detail" data-id={movie.id}>
        <span>{movie.title}</span>
        <p>{movie.descrShort}</p>
        <RentingHandler toggleRentedStatus={this.props.toggleRentedStatus} movie={movie}/>
      </div>
    ) : (
      <Redirect to={`/catalog`} />
    )
  }
}

export default MovieDetail
