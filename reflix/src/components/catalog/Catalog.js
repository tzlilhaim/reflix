import React, { Component } from "react"
import Movie from "./moviesManager/Movie"
import Rented from "./rentingManager/Rented"
import Search from "./searchManager/Search"
import Budget from "./budgetManager/Budget"

class Catalog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: "",
      movies: [...this.props.movies].map((m) => {
        m["isFilteredIn"] = true
        return m
      }),
      rented: [...this.props.rented].map((m) => {
        m["isFilteredIn"] = true
        return m
      }),
    }
  }
  handleSearch = (searchInput) => {
    if (searchInput !== this.state.search) {
      const filteredMovies = [...this.state.movies].map((m) => {
        m.isFilteredIn = m.title
          .toLowerCase()
          .includes(searchInput.toLowerCase())
        return m
      })
      const filteredRented = [...this.state.rented].map((r) => {
        r.isFilteredIn = r.title
          .toLowerCase()
          .includes(searchInput.toLowerCase())
        return r
      })

      this.setState({
        search: searchInput,
        movies: filteredMovies,
        rented: filteredRented,
      })
    }
  }
  render() {
    return (
      <div id="catalog">
        <h2>Catalog:</h2>
        <Search handleSearch={this.handleSearch} />
        <Budget budget={this.props.budget} />
        {this.state.rented.filter((m) => m.isFilteredIn).length ? (
          <Rented
            toggleRentedStatus={this.props.toggleRentedStatus}
            movies={this.state.rented.filter((r) => r.isFilteredIn)}
          />
        ) : null}
        <div id="all-movies">
          {this.state.movies
            .filter((m) => m.isFilteredIn)
            .map((movie, index) => {
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
