import React from "react";
import SearchForm from "../SearchForm/SearchFom";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
function Movies() {
  return (
          <div className="section-movies">
            <SearchForm/>
            <MoviesCardList/>
          </div>
  )
}
export default Movies;