import React, { Component } from "react"
import Movie from "../moviesManager/Movie"

class Rented extends Component {
  render() {
    return (
      <div id="rented">
        <h2>Rented:</h2>
        <div id="rented-movies">
          {this.props.movies.map((movie,index) => {
            const rentingHandler = {
              btnFunc: movie.isRented
                ? this.props.toggleRentedStatus.unRentMovie
                : this.props.toggleRentedStatus.rentMovie,
              btnText: movie.isRented ? "-" : "+",
            }
            return (
              <Movie
                key={`rm-${index}`}
                movie={movie}
                rentingHandler={rentingHandler}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default Rented
