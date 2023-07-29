import React from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PopupWithNav from '../PopupWithNav/PopupWithNav';
import NotFound from '../NotFound/NotFound';
import moviesApi from '../../utils/MoviesApi';
import { searchMovies } from '../../utils/utils';
import { errorsMessages } from '../../utils/constants';
import { getShortFilms } from '../../utils/utils';
function App() {
  const searchResult = JSON.parse(localStorage.getItem("foundMovies"));
  const checkBoxState = localStorage.getItem("checkBoxState");
  const searchInputValue = localStorage.getItem("searchValue");
  
  const [isPopupWithNavOpen, setIsPopupWithNavOpen] = React.useState(false);
  const [isSearched, setIsSearched] = React.useState(false);
  const [foundMovies, setFoundMovies] = React.useState([]);
  
  const [searchResultText, setSearchResultText] =
    React.useState('Ничего не найдено');

  const handleSearchSubmit = (searchValue) => {
    moviesApi
      .getMovies()
      .then((movies) => {
        const searchResult = searchMovies(movies, searchValue);
        setFoundMovies(searchResult);
        localStorage.setItem("foundMovies", JSON.stringify(searchResult))
        // localStorage.setItem("checkBoxState", isChecked)
        localStorage.setItem("searchValue", searchValue)
          setIsSearched(true);
      })
      .catch((error) => {
        setSearchResultText(errorsMessages.moviesResError);
      });
  };

  React.useEffect(() => {
    if (!!searchResult) {
      setFoundMovies(searchResult);
      setIsSearched(true);
    }
    console.log(!!searchResult)
  }, [])


  const handleNavClick = () => {
    setIsPopupWithNavOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupWithNavOpen(false);
  };



  return (
    <div className="page">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Main />
              <Footer />
            </>
          }
        />
        <Route
          path="/movies"
          element={
            <>
              <Header onNav={handleNavClick} />
              <Movies
                isSearched={isSearched}
                onSearch={handleSearchSubmit}
                foundMovies={foundMovies}
                resultText={searchResultText}
              />
              <Footer />
            </>
          }
        />
        <Route
          path="/saved-movies"
          element={
            <>
              <Header />
              <SavedMovies />
              <Footer />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <Header />
              <Profile />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <PopupWithNav onClose={handleClosePopup} isOpen={isPopupWithNavOpen} />
    </div>
  );
}

export default App;
