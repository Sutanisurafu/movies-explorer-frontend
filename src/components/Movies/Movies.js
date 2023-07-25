import React from "react";
import SearchForm from "../SearchForm/SearchFom";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import {moviesData} from "../../utils/constants"

function Movies() {
  return (
          <main className="section-movies">
            <SearchForm/>
            <MoviesCardList
            isSaved={false}
            moviesData={moviesData}/>
            <button className="section-movies__more-btn">Ещё</button>
          </main>
  )
}
export default Movies;