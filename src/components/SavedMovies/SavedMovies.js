import React from "react";
import SearchForm from "../SearchForm/SearchFom";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import authApi from "../../utils/MainApi";

function SavedMovies({ savedMovies, onDisLike }) {
  // const [favoriteMovies, setFavoriteMovies] = React.useState(savedMovies);
  // React.useEffect(() => {
  //   authApi.getMovies()
  //   .then((moviesData) => {
  //     setFavoriteMovies(moviesData)
  //   })
  // }, [savedMovies])

  return (
          <main className="section-favorite">
            <SearchForm/>
            <MoviesCardList
            isFavorite={true}
            isSaved={true}
            moviesList={savedMovies}
            savedMoviesList={savedMovies}
            onDisLike={onDisLike}/>
          </main>
  )
}
export default SavedMovies;