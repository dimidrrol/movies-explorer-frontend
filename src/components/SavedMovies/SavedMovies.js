import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCard from '../MoviesCard/MoviesCard';
import React from 'react';

function SavedMovies(props) {
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
            />
            <SearchForm />
            <MoviesCardList>
                <MoviesCard>
                    <button type='button' className='movies-card__button button-hover'>&#10006;</button>
                </MoviesCard>
                <MoviesCard>
                    <button type='button' className='movies-card__button button-hover'>&#10006;</button>
                </MoviesCard>
                <MoviesCard>
                    <button type='button' className='movies-card__button button-hover'>&#10006;</button>
                </MoviesCard>
            </MoviesCardList>
            <Footer />
        </>
    )
}

export default SavedMovies;