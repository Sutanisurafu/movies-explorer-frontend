import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({ moviesList, isSaved, resultText, onLike }) {

  return (
    (!moviesList.length ? <h2 className='cardlist-section__title'>{resultText}
    </h2> :  <div className="cardlist-section">
      {moviesList.map((movieCard) => {
        return (
          <MovieCard
            isSaved={isSaved}
            key={movieCard.id}
            card={movieCard}
            onLike={onLike}
          />
      );
      })}
    </div>
     )

  );
}
export default MoviesCardList;
