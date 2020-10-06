import React, { Component } from "react"
import { Link } from "react-router-dom"
import RentingHandler from "../rentingManager/RentingHandler"

class Movie extends Component {
  render() {
    let movie = this.props.movie
    return (
      <div className="movie" data-id={movie.id}>
        <RentingHandler
          toggleRentedStatus={this.props.toggleRentedStatus}
          movie={movie}
          disabled={
            movie.isRented ? false : this.props.budget - movie.price < 0
          }
        />
        <div className="movie-price">price: {movie.price}$</div>
        <Link to={`/movies/${movie.id}`}>
          <div className="movie-img">
            <img src={movie.img} alt={movie.title}></img>
          </div>
        </Link>
      </div>
    )
  }
}

export default Movie
