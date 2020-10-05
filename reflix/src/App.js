import React, { Component } from "react"
import logo from "./logo.svg"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "./App.css"
import reflix from "./reflix/reflix"
import Logo from "./components/logo/Logo"
import Landing from "./components/landing/Landing"
import Catalog from "./components/catalog/Catalog"
import MovieDetails from "./components/catalog/moviesManager/MovieDetail"

class App extends Component {
  constructor() {
    super()
    this.state = {
      users: reflix.users,
      movies: reflix.catalog,
      budget: reflix.wallet.money,
    }
  }
  toggleRentedStatus = {
    rentMovie: (movieId) => {
      const allMovies = [...this.state.movies]
      allMovies.find((movie) => movie.id === movieId).isRented = true
      this.setState({ movies: allMovies })
    },
    unRentMovie: (movieId) => {
      const allMovies = [...this.state.movies]
      allMovies.find((movie) => movie.id === movieId).isRented = false
      this.setState({ movies: allMovies })
    },
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div id="home-background"></div>
          <div id="main-links">
            <Link to="/">Home</Link>
            <Link to="/catalog">Catalog</Link>
          </div>
          <div id="app-logo">
            <Logo />
          </div>
          <Route
            exact
            path="/"
            render={() => <Landing users={this.state.users} />}
          />
          <Route
            exact
            path="/catalog"
            render={() => (
              <Catalog
                budget={this.state.budget}
                rented={this.state.movies.filter((m) => m.isRented)}
                movies={this.state.movies}
                toggleRentedStatus={this.toggleRentedStatus}
              />
            )}
          />
          <Route
            exact
            path="/movies/:id"
            render={({ match }) => (
              <MovieDetails
                match={match}
                state={this.state}
                toggleRentedStatus={this.toggleRentedStatus}
              />
            )}
          ></Route>
        </div>
      </Router>
    )
  }
}

export default App
