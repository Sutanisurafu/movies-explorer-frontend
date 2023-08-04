import React from 'react';
import {
  Route,
  Routes,
  Navigate,
  useNavigate,
  useLocation,
} from 'react-router-dom';
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
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import { searchMovies } from '../../utils/utils';
import { errorsMessages } from '../../utils/constants';
import { CurrentUserContextObj } from '../../contexts/CurrentUserContext';
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';

function App() {
  const navigate = useNavigate();

  const [isPopupWithNavOpen, setIsPopupWithNavOpen] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState('');
  const location = useLocation();

  const [moviesList, setMoviesList] = React.useState([]); //Список всех доступных фильмов
  const [savedMoviesList, setSavedMoviesList] = React.useState([]); //список сохранённых(лайкнутых) фильмов
  const [isDataLoading, setIsDataLoading] = React.useState(true);
  const [loginServerError, setLoginServerError] = React.useState("");
  const [registerServerError, setRegisterServerError] = React.useState("");

  React.useEffect(() => {
    loggedIn &&
      Promise.all([moviesApi.getMovies(), mainApi.getMovies()]).then(
        ([movies, savedMovies]) => {
          setMoviesList(movies);
          setSavedMoviesList(savedMovies);
        }
      );
  }, [loggedIn]);



  const handleNavClick = () => {
    setIsPopupWithNavOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupWithNavOpen(false);
  };

  const tokenCheck = () => {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      authApi
        .checkToken(jwt)
        .then((res) => {
          setIsDataLoading(false);
          if (res) {
            setLoggedIn(true);
            setCurrentUser(res);
          } else {
            console.log('с токеном что-то не так');
          }
        })
        .catch((err) => console.log(err));
    } else {
      console.log('необходима авторизация');
      setIsDataLoading(false);
      navigate('/main');
    }
  };

  React.useEffect(() => {
    tokenCheck();
  }, []);

  const handleRegisterSubmit = (registerData) => {
    authApi
      .register(registerData)
      .then((responseData) => {
        const loginData = {email: registerData.email, password: registerData.password}
        handleLoginSubmit(loginData);
      })
      .catch((err) => {
        if (err === "Ошибка: 409") {
          setRegisterServerError("Такой email уже зарегистрирован!")
        } else {
          console.log(err);
        }
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
        if (err === "Ошибка: 401") {
          setLoginServerError("Неправильные почта или пароль!")
        } else {
          console.log(err);
        }
      });
  };

  const handleLogoutClick = () => {
    setLoggedIn(false);
    localStorage.clear();
    navigate('/main');
  };

  const handleLikeClick = (card) => {
    const isLiked = savedMoviesList.some((movie) => movie.movieId === card.id);
    if (!isLiked) {
      authApi
        .postMovie(card)
        .then((response) => {
          setSavedMoviesList([...savedMoviesList, response]);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const dislikedCard = savedMoviesList.find(
        (movie) => movie.movieId === card.id
      );

      handleDisLikeClick(dislikedCard);
    }
  };

  const handleDisLikeClick = (card) => {
    authApi.deleteMovie(card._id).then((res) => {
      const filteredMovies = savedMoviesList.filter((movie) => {
        if (movie._id !== card._id) {
          return movie;
        }
      });
      setSavedMoviesList(filteredMovies);
    })
    .catch((err) => {
      console.log(err)
    })
  };

  const handleProfileSubmit = (value) => {
    console.log(value)
    mainApi.editUser(value)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  if (isDataLoading) {
    return;
  }

  return (
    <CurrentUserContextObj.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route path="*" element={<NotFound />} />

          <Route
            path="/"
            element={
                <Navigate to="/main" replace />
            }
          />
          <Route
            path="/main"
            element={
              loggedIn ? (
                <Navigate to="/movies" replace />
              ) : (
                <>
                  <Header />
                  <Main />
                  <Footer />
                </>
              )
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectedRouteElement
                element={Movies}
                loggedIn={loggedIn}
                onNav={handleNavClick}
                moviesList={moviesList}
                savedMovies={savedMoviesList}
                onLike={handleLikeClick}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRouteElement
              loggedIn={loggedIn}
              element={SavedMovies}
              isSaved={true}
              onDisLike={handleDisLikeClick}
              savedMovies={savedMoviesList}
              moviesList={moviesList}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRouteElement
              onsubmit={handleProfileSubmit}
              element={Profile}
              loggedIn={loggedIn}
              onLogout={handleLogoutClick}
              />
            }
          />
          <Route
            path="/login"
            element={!loggedIn ? (<Login serverError={loginServerError} onLogin={handleLoginSubmit}/>) : (<Navigate to="/movies" replace/>) }
          />
          <Route
            path="/register"
            element={ !loggedIn ? (<Register serverError={registerServerError} onRegister={handleRegisterSubmit} />) : (<Navigate to="/movies" replace/>)}
          />
        </Routes>
        <PopupWithNav onClose={handleClosePopup} isOpen={isPopupWithNavOpen} />
      </div>
    </CurrentUserContextObj.Provider>
  );
}

export default App;
