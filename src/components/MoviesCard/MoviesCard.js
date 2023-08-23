import './MoviesCard.css';
import filmImage from '../../images/film-image.png';
import React from 'react';

function MoviesCard(props) {
    return (
        <article className='movies-card'>
            <div className='movies-card__description'>
                <h2 className='movies-card__title'>В погоне за Бенкси</h2>
                <p className='movies-card__duration'>27 минут</p>
            </div>
            <img src={filmImage} alt='Превью фильма' className='movies-card__image' />
            {props.children}
        </article>
    )
}

export default MoviesCard;