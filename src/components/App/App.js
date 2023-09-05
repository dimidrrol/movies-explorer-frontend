import './App.css';
import React from 'react';
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Main from '../Main/Main';
import Navigation from '../Navigation/Navigation';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import { getFilms } from '../../utils/MoviesApi';
import { api } from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { ProtectedLoggedRouteElement, ProtectedRouteElement } from '../ProtectedRoute/ProtectedRoute';

function App() {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [movies, setMovies] = React.useState([]);
  const [receivedObject, setReceivedObject] = React.useState([]);
  const [error, setError] = React.useState('');
  const [formError, setFormError] = React.useState('');
  const [moviesToShow, setMoviesToShow] = React.useState(0);
  const [searchValue, setSearchValue] = React.useState('');
  const [savedSearchValue, setSavedSearchValue] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    const jwt = localStorage.getItem('userId');
    const localFilteredMovies = JSON.parse(localStorage.getItem('filteredMovies'));
    if (jwt) {
      api.getUserInfo(jwt)
        .then((data) => {
          if (data) {
            setLoggedIn(true);
            getUserInfo();
            setReceivedObject(localFilteredMovies);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [])

  React.useEffect(() => {
    setMoviesToShow(getMoviesToShow());
    movies.forEach((movie) => {
      if (savedMovies.some((save) => save.movieId === movie.id)) {
        movie.isFavorite = true;
      } else if (savedMovies.some((save) => save.movieId !== movie.id)) {
        movie.isFavorite = false;
      }
    });
  }, [movies, savedMovies])

  React.useEffect(() => {
    setSearchValue(localStorage.getItem('searchValue'));
    const filteredMovies = movies.filter(movie => movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) || movie.nameEN.toLowerCase().includes(searchValue.toLowerCase()));
    setReceivedObject(filteredMovies);
    if (filteredMovies.length !== 0) {
      localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
    } else {
      setError('Ничего не найдено');
    }
  }, [movies])

  React.useEffect(() => {
    const handleResize = () => {
      setMoviesToShow(getMoviesToShow());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    if (localStorage.getItem('switch') === 'true') {
      setIsSwitchOn(true);
    } else {
      setIsSwitchOn(false);
    }
  }, [movies]);

  function getUserInfo() {
    Promise.all([api.getUserInfo()])
      .then(([{ name, email, _id }]) => {
        setCurrentUser({ name, email, _id });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleRegister(name, email, password) {
    api.register(name, email, password)
      .then(() => {
        api.authorize(email, password)
          .then(() => {
            handleNavigateMovies();
            setLoggedIn(true);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
        if (err.includes('409')) {
          setFormError('Пользователь с таким email уже существует.')
        } else if (err.includes('500')) {
          setFormError('При регистрации пользователя произошла ошибка.')
        }
      })
  }

  function handleLogin(email, password) {
    api.authorize(email, password)
      .then(() => {
        handleNavigateMain();
        setLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
        if (err.includes('401')) {
          setFormError('Вы ввели неправильный логин или пароль.')
        } else if (err.includes('500')) {
          setFormError('При авторизации произошла ошибка. Токен не передан или передан не в том формате.')
        }
      });
  }

  function patchUser(name, email) {
    api.patchUser(name, email)
      .catch((err) => {
        console.log(err);
        if (err.includes('409')) {
          setFormError('Пользователь с таким email уже существует.')
        } else if (err.includes('500')) {
          setFormError('При регистрации пользователя произошла ошибка.')
        }
      })
  };

  function getMovies() {
    setIsLoading(true);
    getFilms()
      .then((movies) => {
        setMovies(movies);
        setMoviesToShow(getMoviesToShow());
      })
      .catch((err) => {
        console.log(err);
        setError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  function toggleLikeMovie(movie) {
    if (!movie.isFavorite) {
      handleLikeMovie(movie);
      movie.isFavorite = true;
    } else {
      handleDeleteMovie(movie);
    }
  }

  function handleDeleteMovie(movie) {
    const deletedMovie = savedMovies.find((film) => film.movieId === (location.pathname === '/movies' ? movie.id : movie.movieId));
    if (deletedMovie) {
      api.deleteMovie(deletedMovie._id)
        .then(() => {
          movie.isFavorite = false;
          const filteredMovies = savedMovies.filter((save) => save.movieId !== (location.pathname === '/movies' ? movie.id : movie.movieId));
          setSavedMovies(filteredMovies);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }

  function handleLikeMovie(movie) {
    api.postMovie(
      movie.country,
      movie.director,
      movie.duration,
      movie.year,
      movie.description,
      'https://api.nomoreparties.co' + movie.image.url,
      movie.trailerLink,
      movie.nameRU,
      movie.nameEN,
      'https://api.nomoreparties.co' + movie.image.formats.thumbnail.url,
      movie.id
    )
      .then((savedMovie) => {
        setSavedMovies([...savedMovies, savedMovie]);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleSearchValue(value) {
    setSearchValue(value);
  };

  function handleSavedSearchValue(value) {
    setSavedSearchValue(value);
  };

  function handleSavedMovies(object) {
    setSavedMovies(object)
  };

  function handleSearchSavedMovies() {
    let filteredMovies = movies.filter(movie => movie.isFavorite ? movie : '');
    let searchMovie = filteredMovies.filter(movie => movie.nameRU.toLowerCase().includes(savedSearchValue.toLowerCase()) || movie.nameEN.toLowerCase().includes(savedSearchValue.toLowerCase()));
    setSavedMovies(searchMovie);
  };

  function getMoviesToShow() {
    const windowWidth = window.innerWidth;
    switch (true) {
      case windowWidth >= 931:
        return 12;
      case windowWidth >= 601:
        return 8;
      case windowWidth >= 320:
        return 5;
      default:
        return 2;
    }
  };

  function handleShowMoreMovies() {
    const windowWidth = window.innerWidth;
    switch (true) {
      case windowWidth >= 931:
        setMoviesToShow(moviesToShow + 3);
        break;
      default:
        setMoviesToShow(moviesToShow + 2);
        break;
    }
  }

  function toggleSwitchShortMovies() {
    if (!isSwitchOn) {
      const filteredMovies = movies.filter((movie) => movie.duration <= 55);
      localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
      localStorage.setItem('switch', 'true');
      setMovies(filteredMovies);
    } else {
      localStorage.setItem('switch', 'false');
      getMovies()
    }
  }

  function logout() {
    api.logout();
    localStorage.removeItem('userId');
    localStorage.removeItem('filteredMovies');
    localStorage.removeItem('searchValue');
    localStorage.removeItem('switch');
    setMovies([]);
    handleNavigateMain();
  }

  function handleNavigateMain() {
    navigate('/', { replace: true });
    setFormError('');
    closePopup();
  }

  function handleNavigateMovies() {
    navigate('/movies', { replace: true });
    setFormError('');
    closePopup();
  }

  function handleNavigateSavedMovies() {
    navigate('/saved-movies', { replace: true });
    setFormError('');
    closePopup();
  }

  function handleNavigateProfile() {
    navigate('/profile', { replace: true });
    setFormError('');
    closePopup();
  }

  function handleNvigateLogin() {
    navigate('/signin', { replace: true });
    setFormError('');
  }

  function handleNavigateRegister() {
    navigate('/signup', { replace: true });
    setFormError('');
  }

  function handleHamburgerClick() {
    setIsPopupOpen(true);
  }

  function closePopup() {
    setIsPopupOpen(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
              loggedIn={loggedIn}
            />
          } />
          <Route path='/movies' pathName element={
            <ProtectedLoggedRouteElement
              element={Movies}
              onHamburgerClick={handleHamburgerClick}
              navigateMain={handleNavigateMain}
              navigateMovies={handleNavigateMovies}
              navigateSavedMovies={handleNavigateSavedMovies}
              navigateProfile={handleNavigateProfile}
              getMovies={getMovies}
              movies={movies}
              error={error}
              isLoading={isLoading}
              receivedObject={receivedObject}
              moviesToShow={moviesToShow}
              onShowMoreMovies={handleShowMoreMovies}
              onHandleSearchValue={handleSearchValue}
              onToggleLikeMovie={toggleLikeMovie}
              searchValue={searchValue}
              loggedIn={loggedIn}
              onToggleSwitchShortMovies={toggleSwitchShortMovies}
              isSwitchOn={isSwitchOn}
            />
          } />
          <Route path='/saved-movies' pathName element={
            <ProtectedLoggedRouteElement
              element={SavedMovies}
              onHamburgerClick={handleHamburgerClick}
              navigateMain={handleNavigateMain}
              navigateMovies={handleNavigateMovies}
              navigateSavedMovies={handleNavigateSavedMovies}
              navigateProfile={handleNavigateProfile}
              onShowMoreMovies={handleShowMoreMovies}
              onDeleteMovie={handleDeleteMovie}
              onHandleSavedSearchValue={handleSavedSearchValue}
              onHandleSearchSavedMovies={handleSearchSavedMovies}
              onSavedMovies={handleSavedMovies}
              savedSearchValue={savedSearchValue}
              loggedIn={loggedIn}
              savedMovies={savedMovies}
              moviesToShow={moviesToShow} />
          } />
          <Route path='/profile' pathName element={
            <ProtectedLoggedRouteElement
              element={Profile}
              onHamburgerClick={handleHamburgerClick}
              navigateMain={handleNavigateMain}
              navigateMovies={handleNavigateMovies}
              navigateSavedMovies={handleNavigateSavedMovies}
              navigateProfile={handleNavigateProfile}
              onLogout={logout}
              onPatchUser={patchUser}
              loggedIn={loggedIn}
              formError={formError}
            />
          } />
          <Route path='/signup' pathName element={
            <ProtectedRouteElement
              element={Register}
              navigateLogin={handleNvigateLogin}
              onRegister={handleRegister}
              formError={formError}
              loggedIn={loggedIn}
            />
          } />
          <Route path='/signin' pathName element={
            <ProtectedRouteElement
              element={Login}
              navigateRegister={handleNavigateRegister}
              onLogin={handleLogin}
              formError={formError}
              loggedIn={loggedIn}
            />
          } />
          <Route path='/*' pathName element={
            <NotFound
              navigateMain={handleNavigateMain}
            />
          } />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
