import './MoviesCard.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard(props) {
    const BASE_URL = 'https://api.nomoreparties.co';
    const [hours, setHours] = React.useState('');
    const [minutes, setMinutes] = React.useState('');
    const location = useLocation();

    React.useEffect(() => {
        setHours(Math.floor(props.card.duration / 60));
        setMinutes(props.card.duration % 60);
    }, [props.card.duration,]);

    function handleLikeClick() {
        props.onToggleLikeMovie(props.card);
    };

    function handleDeleteClick() {
        props.onDeleteMovie(props.card);
        const filteredMovies = props.filteredMovies.filter(movie => movie.movieId !== props.card.movieId ? movie : '');
        props.handleFilteredMovies(filteredMovies);
    };

    return (
        <article className='movies-card'>
            <div className='movies-card__description'>
                <h2 className='movies-card__title'>{props.card.nameRU}</h2>
                <p className='movies-card__duration'>{`${hours}ч. ${minutes}мин.`}</p>
            </div>
            <a href={props.card.trailerLink} target='__blank'>
                {location.pathname === '/movies' ? (
                    <img src={`${BASE_URL}${props.card.image.url}`} alt='Превью фильма' className='movies-card__image' />
                ) : (
                    <img src={props.card.image} alt='Превью фильма' className='movies-card__image' />
                )}
            </a>
            {location.pathname === '/movies' ? (
                <button onClick={handleLikeClick} type='button' className={`movies-card__button button-hover ${props.card.isFavorite ? 'movies-card__button_type_saved' : ''}`}>{props.card.isFavorite ? '\u2713' : 'Сохранить'}</button>
            ) : (
                <button onClick={handleDeleteClick} type='button' className='movies-card__button button-hover'>&#10006;</button>
            )}
        </article>
    )
}

export default MoviesCard;