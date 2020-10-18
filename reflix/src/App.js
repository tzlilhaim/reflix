import React, { useState, useEffect } from "react"
import "./styles/header.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "./styles/app.css"
import { Snackbar, IconButton } from "@material-ui/core"
import reflix from "./reflix/reflix"
import Logo from "./components/logo/Logo"
import Landing from "./components/landing/Landing"
import Catalog from "./components/catalog/Catalog"
import MovieDetails from "./components/catalog/moviesManager/MovieDetail"
import User from "./components/user/User"

export default function App() {
  const [users, setUsers] = useState([...reflix.users])
  const [activeUser, setActiveUser] = useState(
    users.find((u) => {
      return u.id === localStorage.getItem("userId")
    }) || users[0]
  )
  const [movies, setMovies] = useState(
    [...reflix.catalog].map((m) => {
      m["isRented"] = activeUser.rented.includes(m)
      return m
    })
  )
  const [rented, setRented] = useState([...activeUser.rented])
  const [activeTab, setActiveTab] = useState("home")
  const [snackBarOpen, setSnackBarOpen] = useState(false)
  const [snackBarMsg, setSnackBarMsg] = useState("")

  const toggleRentedStatus = {
    rentMovie: (movieId) => {
      const movie = [...movies].find((movie) => movie.id === movieId)
      if (movie) {
        const user = { ...activeUser }
        if (user.wallet.isEnoughMoney(movie.price)) {
          user.wallet.purchase(movie.price)
          user.rented.push(movie)
          setActiveUser(user)
          setSnackBarMsg(`Rented ${movie.title} successfully!`)
          setSnackBarOpen(true)
        } else {
          setSnackBarMsg(
            `Cannot rent ${movie.title}, since it is out of budget`
          )
          setSnackBarOpen(true)
        }
      } else {
        setSnackBarMsg(`${movie.title} was not found`)
        setSnackBarOpen(true)
      }
    },
    unRentMovie: (movieId) => {
      const user = { ...activeUser }
      let rentedMovie = null
      user.rented.forEach((movie, index) => {
        if (movie.id === movieId) {
          rentedMovie = { movie, index }
        }
      })
      if (rentedMovie) {
        user.rented.splice(rentedMovie.index, 1)
        user.wallet.getRefund(rentedMovie.movie.price)
        setActiveUser(user)
        setSnackBarMsg(
          `${rentedMovie.movie.title} is not rented anymore for ${user.name}`
        )
        setSnackBarOpen(true)
      } else {
        setSnackBarMsg(
          `${rentedMovie.movie.title} wasn't rented for ${user.name}`
        )
        setSnackBarOpen(true)
      }
    },
  }
  const snackBarClose = (event) => {
    setSnackBarOpen(false)
  }

  useEffect(() => {
    setMovies(
      [...reflix.catalog].map((m) => {
        m["isRented"] = activeUser.rented.includes(m)
        return m
      })
    )
    setRented([...activeUser.rented])
  }, [activeUser])

  return (
    <Router>
      <div className="App">
        <Logo />
        <div id="header">
          <div id="main-links">
            <Link
              to="/"
              className={activeTab === "home" ? "active-tab" : "inactive-tab"}
            >
              Home
            </Link>
            <Link
              to="/catalog"
              className={
                activeTab === "catalog" ? "active-tab" : "inactive-tab"
              }
            >
              Catalog
            </Link>
          </div>
          {activeUser && activeTab !== "home" ? (
            <User user={activeUser} />
          ) : null}
          <Snackbar
            open={snackBarOpen}
            autoHideDuration={3000}
            onClose={snackBarClose}
            message={<span id="snackbar-msg">{snackBarMsg}</span>}
            action={
              <IconButton
                key="close"
                arial-label="Close"
                color="inherit"
                onClick={snackBarClose}
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
              users={users}
              setActiveUser={setActiveUser}
              setActiveTab={setActiveTab}
              isActiveTab={activeTab === "home"}
            />
          )}
        />
        <Route
          exact
          path="/catalog"
          render={() => (
            <Catalog
              budget={activeUser.wallet.money}
              rented={rented}
              movies={movies}
              toggleRentedStatus={toggleRentedStatus}
              setActiveTab={setActiveTab}
              isActiveTab={activeTab === "catalog"}
            />
          )}
        />
        <Route
          exact
          path="/movies/:id"
          render={({ match }) => (
            <MovieDetails
              match={match}
              movies={movies}
              toggleRentedStatus={toggleRentedStatus}
              budget={activeUser.wallet.money}
              setActiveTab={setActiveTab}
            />
          )}
        ></Route>
      </div>
    </Router>
  )
}
