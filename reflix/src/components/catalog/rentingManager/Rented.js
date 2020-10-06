import React, { Component } from "react"
import Movie from "../moviesManager/Movie"

class Rented extends Component {
  render() {
    return (
      <div id="rented">
        <h2>Rented:</h2>
        <div id="rented-movies">
          {this.props.movies.map((movie, index) => {
            return (
              <Movie
                key={`rm-${index}`}
                movie={movie}
                toggleRentedStatus={this.props.toggleRentedStatus}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default Rented
