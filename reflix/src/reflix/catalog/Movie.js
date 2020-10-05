class Movie {
  constructor({ id, title, year, img, descrShort, price }) {
    this.id = id
    this.isRented = false
    this.title = title
    this.year = year
    this.img = img
    this.descrShort = descrShort
    this.price = price
  }
}

export default Movie
