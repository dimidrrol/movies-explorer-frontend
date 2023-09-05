import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import React from 'react';

function Movies(props) {
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
                <SearchForm searchValue={props.searchValue} onHandleSearchValue={props.onHandleSearchValue} movies={props.movies} getMovies={props.getMovies} onToggleSwitchShortMovies={props.onToggleSwitchShortMovies} isSwitchOn={props.isSwitchOn} />
                {props.movies.length !== 0 ?
                    <MoviesCardList onShowMoreMovies={props.onShowMoreMovies} receivedObject={props.receivedObject} moviesToShow={props.moviesToShow}>
                        {props.isLoading ? <Preloader /> : props.receivedObject.length === 0 ? (<h2 className='movies-list__error'>{props.error}</h2>) : props.receivedObject.slice(0, props.moviesToShow).map(card => {
                            return (
                                <MoviesCard card={card} key={card.id} onToggleLikeMovie={props.onToggleLikeMovie} />
                            )
                        })}
                    </MoviesCardList> :
                    <></>}
            </main>
            <Footer />
        </>
    )
}

export default Movies;