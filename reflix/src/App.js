import React, { Component } from "react"
import "./styles/header.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "./styles/app.css"
import { Snackbar, IconButton } from "@material-ui/core"
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
      activeTab: "home",
      snackBarOpen: false,
      snackBarMsg: "",
    }
  }
  toggleRentedStatus = {
    rentMovie: (movieId) => {
      const allMovies = [...this.state.movies]
      const movie = allMovies.find((movie) => movie.id === movieId)
      const updatedBudget = this.state.budget - movie.price
      if (updatedBudget >= 0) {
        movie.isRented = true
        this.setState({
          movies: allMovies,
          budget: updatedBudget,
          snackBarOpen: true,
          snackBarMsg: `rented ${movie.title} successfully!`,
        })
      }
    },
    unRentMovie: (movieId) => {
      const allMovies = [...this.state.movies]
      const movie = allMovies.find((movie) => movie.id === movieId)
      movie.isRented = false
      this.setState({
        movies: allMovies,
        budget: this.state.budget + movie.price,
        snackBarOpen: true,
        snackBarMsg: `${movie.title} is not rented anymore`,
      })
    },
  }
  snackBarClose = (event) => {
    this.setState({ snackBarOpen: false })
  }
  setActiveTab = (tabName) => {
    this.setState({ activeTab: tabName })
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div id="header">
            <div id="main-links">
              <Link
                to="/"
                className={
                  this.state.activeTab === "home"
                    ? "active-tab"
                    : "inactive-tab"
                }
              >
                Home
              </Link>
              <Link
                to="/catalog"
                className={
                  this.state.activeTab === "catalog"
                    ? "active-tab"
                    : "inactive-tab"
                }
              >
                Catalog
              </Link>
            </div>
            <Logo />
            <Snackbar
              open={this.state.snackBarOpen}
              autoHideDuration={3000}
              onClose={this.snackBarClose}
              message={<span id="snackbar-msg">{this.state.snackBarMsg}</span>}
              action={
                <IconButton
                  key="close"
                  arial-label="Close"
                  color="inherit"
                  onClick={this.snackBarClose}
                >
                  x
                </IconButton>
              }
            />
          </div>
          <Route
            exact
            path="/"
            render={() => (
              <Landing
                users={this.state.users}
                setActiveTab={this.setActiveTab}
                isActiveTab={this.state.activeTab === "home"}
              />
            )}
          />
          <Route
            exact
            path="/catalog"
            render={({ match }) => (
              <Catalog
                budget={this.state.budget}
                rented={this.state.movies.filter((m) => m.isRented)}
                movies={this.state.movies}
                toggleRentedStatus={this.toggleRentedStatus}
                setActiveTab={this.setActiveTab}
                isActiveTab={this.state.activeTab === "catalog"}
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
                budget={this.state.budget}
                setActiveTab={this.setActiveTab}
              />
            )}
          ></Route>
        </div>
      </Router>
    )
  }
}

export default App
