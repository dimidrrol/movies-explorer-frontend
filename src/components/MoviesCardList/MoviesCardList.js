import './MoviesCardList.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCardList(props) {
    const location = useLocation();

    return (
        <div className='movies-list'>
            <div className='movies-list__cards'>
                {props.children}
            </div>
            {location.pathname === '/movies' ? (
                <button onClick={props.onShowMoreMovies} type='button' className={props.receivedObject.length === 0 || props.receivedObject.length <= props.moviesToShow ? 'movies-list__button_hide movies-list__button button-hover' : 'movies-list__button button-hover'}>Ещё</button>
            ) : (
                <button onClick={props.onShowMoreMovies} type='button' className={props.filteredMovies.length === 0 || props.filteredMovies.length <= props.moviesToShow ? 'movies-list__button_hide movies-list__button button-hover' : 'movies-list__button button-hover'}>Ещё</button>
            )}
        </div>
    )
}

export default MoviesCardList;