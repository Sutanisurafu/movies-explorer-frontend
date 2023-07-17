import React from "react";
import SearchForm from "../SearchForm/SearchFom";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import {moviesData} from "../../utils/constants"

function Movies() {
  return (
          <div className="section-movies">
            <SearchForm/>
            <MoviesCardList
            moviesData={moviesData}/>
          </div>
  )
}
export default Movies;