export const searchMovies = (moviesList, searchValue) => {
  const searchedMovies = moviesList.filter((movie) => {
    const nameRu = movie.nameRU;
    const nameEn = movie.nameEN;
    const result = nameRu.indexOf(searchValue) && nameEn.indexOf(searchValue);
    if (result >= 0) {return movie}
  })

  return searchedMovies;
}