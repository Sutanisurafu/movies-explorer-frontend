import React from 'react';
import SearchForm from '../SearchForm/SearchFom';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { useResize } from '../../hooks/use-resize';

function Movies({ isSearched, moviesList, onSearch, resultText }) {
  const [moreBtnEmergence, setMoreBtnEmergence] = React.useState(false);

  const { width, isScreenMobile, isScreenX, isScreenPC } = useResize();
  const moreBtnClassName = `section-movies__more-btn ${moreBtnEmergence && "section-movies__more-btn_visible"}`

  function handleMoreBtnVisible() {
    if (isScreenPC && moviesList.length > 12) {
      setMoreBtnEmergence(true);
    } else {setMoreBtnEmergence(false)} if (isScreenX && moviesList.length > 8) {
      setMoreBtnEmergence(true);
    } else {setMoreBtnEmergence(false)} if (isScreenMobile && moviesList.length > 5) {
      setMoreBtnEmergence(true);
    }
  }

  function handleMoreBtnClick() {

  }

  React.useEffect(() => {
    handleMoreBtnVisible()
  }, [moviesList]);

  return (
    <main className="section-movies">
      <SearchForm onSearch={onSearch} />
      {isSearched ? (
        <>
          <MoviesCardList moviesList={moviesList} resultText={resultText} />
          <button className={moreBtnClassName}>Ещё</button>
        </>
      ) : (
        <Preloader />
      )}
    </main>
  );
}
export default Movies;
