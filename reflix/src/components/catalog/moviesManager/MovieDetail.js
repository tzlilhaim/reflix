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
        <Link className="back" to={`/catalog`}>
          {"< Back"}
        </Link>
        <h2 className="movie-title-year">
          {movie.title} ({movie.year})
        </h2>
        <div className="movie-img">
          <img src={movie.img} alt={movie.title}></img>
        </div>
        <p className="movie-description">{movie.descrShort}</p>
        <div className="movie-price">price: {movie.price}$</div>
        <RentingHandler
          disabled={
            movie.isRented ? false : this.props.budget - movie.price < 0
          }
          toggleRentedStatus={this.props.toggleRentedStatus}
          movie={movie}
        />
      </div>
    ) : (
      <Redirect to={`/catalog`} />
    )
  }
}

export default MovieDetail
