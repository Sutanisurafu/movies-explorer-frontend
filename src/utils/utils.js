import { useResize } from "../hooks/use-resize";

export const searchMovies = (moviesList, searchValue) => {
  const searchedMovies = moviesList.filter((movie) => {
    const nameRu = movie.nameRU.toLowerCase();
    const nameEn = movie.nameEN.toLowerCase();
    const result = nameRu.indexOf(searchValue) && nameEn.indexOf(searchValue);
    if (result >= 0) {return movie}
  })

  return searchedMovies;
}

export const sliceMoviesList = (moviesList, start, end) => {
  return moviesList.slice(start,end)
}