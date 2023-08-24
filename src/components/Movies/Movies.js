import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCard from '../MoviesCard/MoviesCard';
import React from 'react';

function Movies(props) {
    const [isSaved, setIsSaved] = React.useState(false);

    function handleSave() {
        if (isSaved) {
            setIsSaved(false);
        } else {
            setIsSaved(true);
        }
    }

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
            <main>
                <SearchForm />
                <MoviesCardList>
                    <MoviesCard>
                        <button onClick={handleSave} type='button' className={`movies-card__button button-hover ${isSaved ? 'movies-card__button_type_saved' : ''}`}>{isSaved ? '\u2713' : 'Сохранить'}</button>
                    </MoviesCard>
                    <MoviesCard>
                        <button onClick={handleSave} type='button' className={`movies-card__button button-hover ${isSaved ? 'movies-card__button_type_saved' : ''}`}>{isSaved ? '\u2713' : 'Сохранить'}</button>
                    </MoviesCard>
                    <MoviesCard>
                        <button onClick={handleSave} type='button' className={`movies-card__button button-hover ${isSaved ? 'movies-card__button_type_saved' : ''}`}>{isSaved ? '\u2713' : 'Сохранить'}</button>
                    </MoviesCard>
                    <MoviesCard>
                        <button onClick={handleSave} type='button' className={`movies-card__button button-hover ${isSaved ? 'movies-card__button_type_saved' : ''}`}>{isSaved ? '\u2713' : 'Сохранить'}</button>
                    </MoviesCard>
                    <MoviesCard>
                        <button onClick={handleSave} type='button' className={`movies-card__button button-hover ${isSaved ? 'movies-card__button_type_saved' : ''}`}>{isSaved ? '\u2713' : 'Сохранить'}</button>
                    </MoviesCard>
                    <MoviesCard>
                        <button onClick={handleSave} type='button' className={`movies-card__button button-hover ${isSaved ? 'movies-card__button_type_saved' : ''}`}>{isSaved ? '\u2713' : 'Сохранить'}</button>
                    </MoviesCard>
                    <MoviesCard>
                        <button onClick={handleSave} type='button' className={`movies-card__button button-hover ${isSaved ? 'movies-card__button_type_saved' : ''}`}>{isSaved ? '\u2713' : 'Сохранить'}</button>
                    </MoviesCard>
                    <MoviesCard>
                        <button onClick={handleSave} type='button' className={`movies-card__button button-hover ${isSaved ? 'movies-card__button_type_saved' : ''}`}>{isSaved ? '\u2713' : 'Сохранить'}</button>
                    </MoviesCard>
                    <MoviesCard>
                        <button onClick={handleSave} type='button' className={`movies-card__button button-hover ${isSaved ? 'movies-card__button_type_saved' : ''}`}>{isSaved ? '\u2713' : 'Сохранить'}</button>
                    </MoviesCard>
                </MoviesCardList>
            </main>
            <Footer />
        </>
    )
}

export default Movies;