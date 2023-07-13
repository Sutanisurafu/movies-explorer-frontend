import React from "react";
import {
  Route,
  Routes,
  Navigate,
  useNavigate
} from "react-router-dom";
import './App.css';
import Main from '../Main/Main'
import Header from '../Header/Header'
import Footer
 from "../Footer/Footer";

function App() {
  return (<>
    <Header/>
    <Main/>
    <Footer/>
    </>
  );
}

export default App;
