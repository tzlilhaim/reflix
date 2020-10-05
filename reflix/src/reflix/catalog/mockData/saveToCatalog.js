import movies from "./mockData"

const saveToCatalog = (catalog) => {
  movies.forEach((movie) => {
    const { title, year, img, descrShort, price } = movie
    catalog.addMovieToCatalog({ title, year, img, descrShort, price })
  })
}

export default saveToCatalog
