import React, { Component } from "react"
import { Link, Redirect } from "react-router-dom"
import Movie from "./Movie"
import Budget from "../budgetManager/Budget"
import { Button } from "@material-ui/core"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import "../../../styles/movieDetail.css"

class MovieDetail extends Component {
  componentDidMount() {
    if (!this.props.isActiveTab) {
      this.props.setActiveTab("catalog")
    }
  }
  render() {
    const movieId = this.props.match.params.id
    const movies = this.props.state.movies
    const movie = movies.find((m) => m.id == movieId)

    return movie ? (
      <div id="movie-detail" data-id={movie.id}>
        <Budget budget={this.props.budget} />
        <Button
          startIcon={<ArrowBackIosIcon />}
          style={{ color: "white" }}
          href={`/catalog`}
          className="back-btn"
        >
          Back
        </Button>
        <h2 className="movie-title-year">
          {movie.title} ({movie.year})
        </h2>
        <Movie movie={movie} />
        <div className="movie-description">
          <h4>Plot Summary:</h4> <p>{movie.descrShort}</p>
        </div>
      </div>
    ) : (
      <Redirect to={`/catalog`} />
    )
  }
}

export default MovieDetail
