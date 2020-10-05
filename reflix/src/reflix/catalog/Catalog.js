import Movie from "./Movie"
import saveMockDataToCatalog from "./mockData/saveToCatalog"

class Catalog {
  constructor() {
    this.movies = []
    this.idTracker = this.movies.length
  }
  findMovieByTitle = (title) => {
    return this.movies.find((m) => m.title === title)
  }
  findMovieById = (id) => {
    return this.movies.find((m) => m.id === id)
  }
  isMovieExists(title) {
    const movie = this.findMovieByTitle(title)
    return movie ? true : false
  }
  addMovieToCatalog = (movieDetails) => {
    if (!this.isMovieExists(movieDetails.title)) {
      movieDetails["id"] = this.idTracker
      const movie = new Movie(movieDetails)
      this.movies.push(movie)
      this.idTracker++
    } else {
      // update if needed
    }
  }
  rentMovie = (id) => {
    const movie = this.findMovieById(id)
    if (movie.isRented) {
      movie.isRented = true
    } else {
      // already rented
    }
  }
}

// Instanciation
const catalog = new Catalog()

// mock Data
saveMockDataToCatalog(catalog)

export default catalog
