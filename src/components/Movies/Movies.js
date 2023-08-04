import React from 'react';
import { useLocation } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchFom';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { getShortFilms, searchMovies } from '../../utils/utils';

function Movies({ moviesList, onLike, savedMovies, onNav, loggedIn }) {
  const localMovies = JSON.parse(localStorage.getItem('foundMovies'));
  const checkBoxState = localStorage.getItem('checkBoxState');
  const searchValue = localStorage.getItem('searchValue');

  const [isSearched, setIsSearched] = React.useState(false); //Был ли совершен поиск?
  const [foundMovies, setFoundMovies] = React.useState([]); //найденые фильмы после поиска
  const [isChecked, setIsChecked] = React.useState(false); //состояние чек бокса

  //тут будет только логика
  function handleSubmit(value) {
    const searchResult = searchMovies(moviesList, value);
    localStorage.setItem('foundMovies', JSON.stringify(searchResult));
    localStorage.setItem('searchValue', value);
    setIsSearched(true);
    setFoundMovies(searchResult)
    // if (isChecked) {
    //   setFoundMovies(getShortFilms(searchResult));
    // } else {
    //   setFoundMovies(searchResult);
    // }
  }

  function handleCheckBoxClick() {
    setIsChecked(!isChecked);
    localStorage.setItem('checkBoxState', !isChecked);
  }

  React.useEffect(() => {
    if (localMovies) {
      setFoundMovies(localMovies);
      setIsSearched(true);
    } else {
      setIsSearched(false);
    }
  }, []);

  React.useEffect(() => {
    if (checkBoxState === 'true') {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [checkBoxState]);

  return (
    <>
      <Header onNav={onNav} loggedIn={loggedIn} />
      <main className="section-movies">
        <SearchForm
          onCheckBox={handleCheckBoxClick}
          onSearch={handleSubmit}
          isChecked={isChecked}
        />
        {isSearched ? (
          <>
            <MoviesCardList
              savedMovies={savedMovies}
              onLike={onLike}
              isChecked={isChecked}
              foundMovies={isChecked ? getShortFilms(foundMovies) : foundMovies}
            />
          </>
        ) : (
          <Preloader />
        )}
      </main>
      <Footer />
    </>
  );
}
export default Movies;
