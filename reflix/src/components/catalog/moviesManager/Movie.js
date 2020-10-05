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
        <Link to={`/movies/${this.props.movie.id}`}>
          <span>{this.props.movie.title}</span>
        </Link>
      </div>
    )
  }
}

export default Movie
