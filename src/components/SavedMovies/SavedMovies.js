import React from "react";
import SearchForm from "../SearchForm/SearchFom";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import {savedMoviesData} from "../../utils/constants"

function SavedMovies() {
  return (
          <main className="section-favorite">
            <SearchForm/>
            {/* <MoviesCardList
            isSaved={true}
            moviesData={savedMoviesData}/> */}
          </main>
  )
}
export default SavedMovies;