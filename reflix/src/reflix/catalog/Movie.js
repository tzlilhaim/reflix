class Movie {
  constructor({id, title, year, img, descrShort}) {
    this.id = id
    this.isRented = false
    this.title = title
    this.year = year
    this.img = img
    this.descrShort = descrShort
  }
}

export default Movie
