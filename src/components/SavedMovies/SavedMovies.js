import React from 'react';
import SearchForm from '../SearchForm/SearchFom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import authApi from '../../utils/MainApi';
import { getShortFilms, searchMovies } from '../../utils/utils';

function SavedMovies({ moviesList, savedMovies, onDisLike }) {
  const [isChecked, setIsChecked] = React.useState(false);
  const [foundMovies, setFoundMovies] = React.useState(savedMovies);

  // const [isSearched, setIsSearched] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  const checkBoxState = localStorage.getItem('checkBoxSavedState');

  // const searchResult = JSON.parse(localStorage.getItem('foundSavedMovies'));

  function handleCheckBoxClick() {
    setIsChecked(!isChecked);
    // localStorage.setItem("checkBoxSavedState", !isChecked)
  }

  React.useEffect(() => {
    setFoundMovies(searchMovies(savedMovies, searchValue));
  }, [savedMovies]);

  // React.useEffect(() => {
  //   if (checkBoxState === "true") {
  //     setIsChecked(true);
  //   }
  // }, [])

  function handleSearchSubmit(value) {
    const searchResult = searchMovies(savedMovies, value);
    setSearchValue(value);
    localStorage.setItem('foundSavedMovies', JSON.stringify(searchResult));
    localStorage.setItem('searchSavedValue', value);
    setFoundMovies(searchResult);
    // setIsSearched(true);
    // if (isChecked) {
    //   setFoundMovies(getShortFilms(searchResult))
    // } else {
    //   setFoundMovies(searchResult)
    // }
  }

  //попробуй отрисовывать shortmovies по условию в пропсе savedmovies
  return (
    <>

      <Header />
      <main className="section-favorite">
        <SearchForm
          onCheckBox={handleCheckBoxClick}
          onSearch={handleSearchSubmit}
          isChecked={isChecked}
        />
        <MoviesCardList
          foundMovies={isChecked ? getShortFilms(foundMovies) : foundMovies}
          savedMovies={savedMovies}
          onDisLike={onDisLike}
        />
      </main>
      <Footer />
    </>
  );
}
export default SavedMovies;
