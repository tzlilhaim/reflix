import React, { Component } from "react"
import RentingHandler from "../rentingManager/RentingHandler"

class Movie extends Component {
  render() {
    return (
      <div className="movie" data-id={this.props.movie.id}>
        <span>{this.props.movie.title}</span>
        <RentingHandler
          state={this.props.rentingHandler}
          movieId={this.props.movie.id}
        />
      </div>
    )
  }
}

export default Movie
