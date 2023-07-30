import React from 'react';
import { Route, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import authApi from '../../utils/MainApi';
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
import { CurrentUserContextObj } from "../../contexts/CurrentUserContext";

function App() {
  const navigate = useNavigate();
  const searchResult = JSON.parse(localStorage.getItem('foundMovies'));
  const [isPopupWithNavOpen, setIsPopupWithNavOpen] = React.useState(false);
  const [isSearched, setIsSearched] = React.useState(false);
  const [foundMovies, setFoundMovies] = React.useState([]);
  const [isSaved, setIsSaved] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState('');
  const location = useLocation();
  const [searchResultText, setSearchResultText] =
    React.useState('Ничего не найдено');

  React.useEffect(() => {
    (loggedIn & (location.pathname !== "/movies")) && navigate('/');
  }, [loggedIn]);

  React.useEffect(() => {
    tokenCheck();
  }, []);

  const handleSearchSubmit = (searchValue) => {
    moviesApi
      .getMovies()
      .then((movies) => {
        const searchResult = searchMovies(movies, searchValue);
        setFoundMovies(searchResult);
        localStorage.setItem('foundMovies', JSON.stringify(searchResult));
        // localStorage.setItem("checkBoxState", isChecked)
        localStorage.setItem('searchValue', searchValue);
        setIsSearched(true);
      })
      .catch(() => {
        setSearchResultText(errorsMessages.moviesResError);
      });
  };

  React.useEffect(() => {
    if (!!searchResult) {
      setFoundMovies(searchResult);
      setIsSearched(true);
    }
  }, []);

  const handleNavClick = () => {
    setIsPopupWithNavOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupWithNavOpen(false);
  };

  const handleLikeClick = () => {
    console.log('лайкнул');
  };

  const tokenCheck = () => {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      authApi
        .checkToken(jwt)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            setCurrentUser(res);
          }
        })
        .catch((err) => console.log(err));
    } else {
      console.log('необходима авторизация');
    }
  };

  const handleRegisterSubmit = (registerData) => {
    authApi
      .register(registerData)
      .then((responseData) => {
        console.log(responseData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLoginSubmit = (loginData) => {
    authApi
      .login(loginData)
      .then(({ token }) => {
        localStorage.setItem('jwt', token);
        tokenCheck();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogoutClick = () => {
    setLoggedIn(false);
    localStorage.clear();
    setIsSearched(false);
    navigate('/main');
  };

  return (
    <CurrentUserContextObj.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route path="*" element={<NotFound />} />

          <Route
            path="/"
            element={
              loggedIn ? (
                <Navigate to="/movies" replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/main"
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
                  isSaved={isSaved}
                  isSearched={isSearched}
                  onSearch={handleSearchSubmit}
                  foundMovies={foundMovies}
                  resultText={searchResultText}
                  onLike={handleLikeClick}
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
                <Profile onLogout={handleLogoutClick} />
              </>
            }
          />
          <Route
            path="/login"
            element={<Login onLogin={handleLoginSubmit} />}
          />
          <Route
            path="/register"
            element={<Register onRegister={handleRegisterSubmit} />}
          />
        </Routes>
        <PopupWithNav onClose={handleClosePopup} isOpen={isPopupWithNavOpen} />
      </div>
    </CurrentUserContextObj.Provider>
  );
}

export default App;
