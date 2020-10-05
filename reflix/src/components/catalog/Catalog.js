import React, { Component } from "react"
import Movie from "./moviesManager/Movie"
import Rented from "./rentingManager/Rented"

class Catalog extends Component {
  render() {
    return (
      <div id="catalog">
        <h2>Catalog:</h2>
        {this.props.rented.length ? (
          <Rented
          toggleRentedStatus={this.props.toggleRentedStatus}
            movies={this.props.rented}
          />
        ) : null}
        <div id="all-movies">
          {this.props.movies.map((movie, index) => {
            const rentingHandler = {
              btnFunc: movie.isRented
                ? this.props.toggleRentedStatus.unRentMovie
                : this.props.toggleRentedStatus.rentMovie,
              btnText: movie.isRented ? "-" : "+",
            }
            return (
              <Movie
                key={`m-${index}`}
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

export default Catalog
