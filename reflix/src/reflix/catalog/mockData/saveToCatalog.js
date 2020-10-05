import movies from "./mockData"

const saveToCatalog = (catalog) => {
  movies.forEach((movie) => {
    const { title, year, img, descrShort } = movie
    catalog.addMovieToCatalog({ title, year, img, descrShort })
  })
}

export default saveToCatalog