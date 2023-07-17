import React from "react";
import MovieCard from "../MovieCard/MovieCard";



function MoviesCardList({moviesData}) {

  return (
    <div className="cardlist-section">
      {moviesData.map((movieCard) => {
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