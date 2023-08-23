import './App.css';
import React from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import Main from '../Main/Main';
import Navigation from '../Navigation/Navigation';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';

function App() {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const navigate = useNavigate();

  function handleNavigateMain() {
    navigate('/', { replace: true });
    closePopup();
  }

  function handleNavigateMovies() {
    navigate('/movies', { replace: true });
    closePopup();
  }

  function handleNavigateSavedMovies() {
    navigate('/saved-movies', { replace: true });
    closePopup();
  }

  function handleNavigateProfile() {
    navigate('/profile', { replace: true });
    closePopup();
  }

  function handleNvigateLogin() {
    navigate('/signin', { replace: true });
  }

  function handleNavigateRegister() {
    navigate('/signup', { replace: true });
  }

  function handleHamburgerClick() {
    setIsPopupOpen(true);
  }

  function closePopup() {
    setIsPopupOpen(false);
  }

  return (
    <div className="root">
      <Navigation
        isOpen={isPopupOpen}
        onClose={closePopup}
        navigateMain={handleNavigateMain}
        navigateMovies={handleNavigateMovies}
        navigateSavedMovies={handleNavigateSavedMovies}
        navigateProfile={handleNavigateProfile}
      />
      <Routes>
        <Route path='/' pathName element={
          <Main
            onHamburgerClick={handleHamburgerClick}
            navigateMain={handleNavigateMain}
            navigateMovies={handleNavigateMovies}
            navigateSavedMovies={handleNavigateSavedMovies}
            navigateProfile={handleNavigateProfile}
            navigateLogin={handleNvigateLogin}
            navigateRegister={handleNavigateRegister}
          />
        } />
        <Route path='/movies' pathName element={
          <Movies
            onHamburgerClick={handleHamburgerClick}
            navigateMain={handleNavigateMain}
            navigateMovies={handleNavigateMovies}
            navigateSavedMovies={handleNavigateSavedMovies}
            navigateProfile={handleNavigateProfile}
          />
        } />
        <Route path='/saved-movies' pathName element={
          <SavedMovies
            onHamburgerClick={handleHamburgerClick}
            navigateMain={handleNavigateMain}
            navigateMovies={handleNavigateMovies}
            navigateSavedMovies={handleNavigateSavedMovies}
            navigateProfile={handleNavigateProfile}
          />
        } />
        <Route path='/profile' pathName element={
          <Profile
            onHamburgerClick={handleHamburgerClick}
            navigateMain={handleNavigateMain}
            navigateMovies={handleNavigateMovies}
            navigateSavedMovies={handleNavigateSavedMovies}
            navigateProfile={handleNavigateProfile}
          />
        } />
        <Route path='/signup' pathName element={
          <Register
            navigateLogin={handleNvigateLogin}
            navigateMain={handleNavigateMain}
          />
        } />
        <Route path='/signin' pathName element={
          <Login
            navigateRegister={handleNavigateRegister}
            navigateMain={handleNavigateMain}
          />
        } />
        <Route path='/*' pathName element={
          <NotFound
            navigateMain={handleNavigateMain}
          />
        } />
      </Routes>
    </div>
  );
}

export default App;
