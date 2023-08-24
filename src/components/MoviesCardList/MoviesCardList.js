import './MoviesCardList.css';
import React from 'react';

function MoviesCardList(props) {
    return (
        <div className='movies-list'>
            <div className='movies-list__cards'>
                {props.children}
            </div>
            <button type='button' className='movies-list__button button-hover'>Ещё</button>
        </div>
    )
}

export default MoviesCardList;