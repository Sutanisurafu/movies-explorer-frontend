import React from "react";
import MovieCard from "../MovieCard/MovieCard";



function MoviesCardList({moviesData, isSaved}) {

  return (
    <div className="cardlist-section">
      {moviesData.map((movieCard) => {
        return (
          <MovieCard
            isSaved={isSaved}
            key={movieCard.movieId}
            card={movieCard}/>
        )
      })}
    </div>
  )
}
export default MoviesCardList;