import React from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path='/' element={<><Header/><Main /><Footer /></>} />
        <Route path='/movies' element={<><Header /><Movies /><Footer /></>} />
        <Route path='/saved-movies' element={<><Header /><SavedMovies /><Footer /></>} />
        <Route path='/profile' element={<><Header/><Profile/></>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
