import React from "react";
import SearchForm from "../SearchForm/SearchFom";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function Movies({ isSearched,  moviesList, onSearch }) {

  React.useEffect(() => {
  }, [])

  return (
          <main className="section-movies">
            <SearchForm onSearch={onSearch}/>
            {isSearched ? <MoviesCardList moviesList={moviesList}/> : <Preloader/>}
          </main>
  )
}
export default Movies;