import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import {movies} from "../../utils/constants"


function MoviesCardList() {

  return (
    <div className="cardlist-section">
      {movies.map((movieCard) => {
        return (
          <MovieCard
            key={movieCard.movieId}
            card={movieCard}/>
        )
      })}
    </div>
  )
}
export default MoviesCardList;