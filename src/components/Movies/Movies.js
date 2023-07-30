import React from 'react';
import { useLocation } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchFom';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { useResize } from '../../hooks/use-resize';
import { sliceMoviesList, getShortFilms } from '../../utils/utils';

function Movies({ isSearched, foundMovies, onSearch, resultText, onLike, isSaved }) {
  const location = useLocation();
  const searchResult = JSON.parse(localStorage.getItem('foundMovies'));
  const checkBoxState = localStorage.getItem('checkBoxState');

  const [moreBtnEmergence, setMoreBtnEmergence] = React.useState(false);
  const [slicedList, setSlicedList] = React.useState(foundMovies);
  const [shortSlicdeList, setShortSlicedList] = React.useState(
    getShortFilms(foundMovies)
  );
  const [numberOfAddedMovies, setNumberOfAddedMovies] = React.useState(0);
  const { width, isScreenMobile, isScreenPC } = useResize();
  const [isChecked, setIsChecked] = React.useState(false);

  const moreBtnClassName = `section-movies__more-btn ${
    moreBtnEmergence && 'section-movies__more-btn_visible'
  }`;

  //управляет количеством отрисованных карточек в зависимости от ширины экрана
  function handleCardsShow(foundMovies) {
    switch (true) {
      case isScreenPC:
        setSlicedList(sliceMoviesList(foundMovies, 0, 12));
        setNumberOfAddedMovies(3);
        break;
      case isScreenMobile:
        setSlicedList(sliceMoviesList(foundMovies, 0, 5));
        setNumberOfAddedMovies(2);
        break;
      default:
        setSlicedList(sliceMoviesList(foundMovies, 0, 8));
        setNumberOfAddedMovies(2);
    }
  }

  //управляет отрисовкой кнопки more
  function handleMoreButtonVisible(a) {
    if (a.length > slicedList.length) {
      setMoreBtnEmergence(true);
    } else {
      setMoreBtnEmergence(false);
    }
  }

  React.useEffect(() => {
    if (isChecked) {
      handleMoreButtonVisible(getShortFilms(foundMovies));
      handleCardsShow(getShortFilms(foundMovies));
    } else {
      handleCardsShow(foundMovies);
      handleMoreButtonVisible(foundMovies);
    }
  }, [foundMovies, width, isChecked]);

  function handleMoreButtonClick() {
    if (isChecked) {
      setSlicedList([
        ...slicedList,
        ...sliceMoviesList(
          getShortFilms(foundMovies),
          slicedList.length,
          slicedList.length + numberOfAddedMovies
        ),
      ]);
      handleMoreButtonVisible(getShortFilms(foundMovies));
    } else {
      setSlicedList([
        ...slicedList,
        ...sliceMoviesList(
          foundMovies,
          slicedList.length,
          slicedList.length + numberOfAddedMovies
        ),
      ]);
      handleMoreButtonVisible(foundMovies);
    }
  }

  function handleCheckBoxClick() {
    setIsChecked(!isChecked);
    localStorage.setItem('checkBoxState', !isChecked);
    if (!isChecked) {
      handleCardsShow(getShortFilms(foundMovies));
      handleMoreButtonVisible(getShortFilms(foundMovies));
    } else {
      handleCardsShow(foundMovies);
      handleMoreButtonVisible(foundMovies);
    }
  }

  React.useEffect(() => {
    if (checkBoxState === 'true') {
      setIsChecked(true);
    }
  }, []);

  //убирает кнопку more когда заканчивются карточки
  React.useEffect(() => {
    if (isChecked) {
      handleMoreButtonVisible(getShortFilms(foundMovies));
    } else {
      handleMoreButtonVisible(foundMovies);
    }
  }, [slicedList]);

  return (
    <main className="section-movies">
      <SearchForm
        onSearch={onSearch}
        clickCheckBox={handleCheckBoxClick}
        isChecked={isChecked}
      />
      {isSearched ? (
        <>
          <MoviesCardList moviesList={slicedList} resultText={resultText} onLike={onLike} isSaved={isSaved} />
          <button onClick={handleMoreButtonClick} className={moreBtnClassName}>
            Ещё
          </button>
        </>
      ) : (
        <Preloader />
      )}
    </main>
  );
}
export default Movies;
