import React, { Component } from "react"
import { Link } from "react-router-dom"
import RentingHandler from "../rentingManager/RentingHandler"

class Movie extends Component {
  render() {
    return (
      <div className="movie" data-id={this.props.movie.id}>
        <RentingHandler
          toggleRentedStatus={this.props.toggleRentedStatus}
          movie={this.props.movie}
        />
        <div className="movie-price">price: {this.props.movie.price}$</div>
        <Link to={`/movies/${this.props.movie.id}`}>
          <div className="movie-img">
            <img src={this.props.movie.img} alt={this.props.movie.title}></img>
          </div>
        </Link>
      </div>
    )
  }
}

export default Movie
