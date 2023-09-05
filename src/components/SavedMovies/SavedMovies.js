import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCard from '../MoviesCard/MoviesCard';
import { api } from '../../utils/MainApi';
import React from 'react';

function SavedMovies(props) {
    const [filteredMovies, setFilteredMovies] = React.useState([]);
    const [error, setError] = React.useState('');
    const [isSwitch, setIsSwitch] = React.useState(false);

    React.useEffect(() => {
        api.getMoviesInfo()
            .then((movies) => {
                props.onSavedMovies(movies);
                setFilteredMovies(movies);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    function handleSearch() {
        const filteredObject = props.savedMovies.filter(movie => movie.nameRU.toLowerCase().includes(props.savedSearchValue.toLowerCase()) || movie.nameEN.toLowerCase().includes(props.savedSearchValue.toLowerCase()));
        if (filteredObject.length !== 0) {
            setFilteredMovies(filteredObject);
            setError('');
        } else {
            setError('Ничего не найдено');
        }
    }

    function handleToggleSwitch() {
        if (!isSwitch) {
            const filteredObject = props.savedMovies.filter(movie => movie.duration <= 55);
            setIsSwitch(true);
            if (filteredObject.length !== 0) {
                setFilteredMovies(filteredObject);
                setError('');
            } else {
                setError('Ничего не найдено');
            }
        } else {
            const filteredObject = props.savedMovies.filter(movie => movie.nameRU.toLowerCase().includes(props.savedSearchValue.toLowerCase()) || movie.nameEN.toLowerCase().includes(props.savedSearchValue.toLowerCase()));
            setFilteredMovies(filteredObject);
            setIsSwitch(false);
            setError('');
        }
    }

    function handleFilteredMovies(object) {
        setFilteredMovies(object);
    };


    return (
        <>
            <Header
                onHamburgerClick={props.onHamburgerClick}
                navigateMain={props.navigateMain}
                navigateMovies={props.navigateMovies}
                navigateSavedMovies={props.navigateSavedMovies}
                navigateProfile={props.navigateProfile}
                navigateLogin={props.navigateLogin}
                navigateRegister={props.navigateRegister}
                loggedIn={props.loggedIn}
            />
            <main>
                <SearchForm isSwitch={isSwitch} onHandleToggleSwitch={handleToggleSwitch} onHandleSearch={handleSearch} onHandleSearchSavedMovies={props.onHandleSearchSavedMovies} savedSearchValue={props.savedSearchValue} onHandleSavedSearchValue={props.onHandleSavedSearchValue} />
                <MoviesCardList filteredMovies={filteredMovies} savedMovies={props.savedMovies} onShowMoreMovies={props.onShowMoreMovies} moviesToShow={props.moviesToShow}>
                    {!error ? filteredMovies.slice(0, props.moviesToShow).map(card => {
                        return (
                            <MoviesCard card={card} key={card._id} onDeleteMovie={props.onDeleteMovie} savedMovies={props.savedMovies} handleFilteredMovies={handleFilteredMovies} filteredMovies={filteredMovies} />
                        )
                    }) : (<h2 className='movies-list__error'>{error}</h2>)}
                </MoviesCardList>
            </main>
            <Footer />
        </>
    )
}

export default SavedMovies;