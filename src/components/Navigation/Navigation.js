import './Navigation.css';
import AccountButton from '../AccountButton/AccountButton';
import React from 'react';
import { useLocation } from 'react-router-dom';

function Navigation(props) {
    const location = useLocation();

    return (
        <div className={`popup ${props.isOpen ? 'popup_opened' : 'popup_closed'}`}>
            <div className='popup__container'>
                <button onClick={props.onClose} type='button' className='popup__close-button button-hover'>&#10006;</button>
                <div className='popup__button-container'>
                    <button onClick={props.navigateMain} type='button' className={`popup__button button-hover ${location.pathname === '/' ? 'popup__button_selected' : ''}`}>Главная</button>
                    <button onClick={props.navigateMovies} type='button' className={`popup__button button-hover ${location.pathname === '/movies' ? 'popup__button_selected' : ''}`}>Фильмы</button>
                    <button onClick={props.navigateSavedMovies} type='button' className={`popup__button button-hover ${location.pathname === '/saved-movies' ? 'popup__button_selected' : ''}`}>Сохранённые фильмы</button>
                </div>
                <AccountButton navigateProfile={props.navigateProfile} />
            </div>
        </div>
    )
}

export default Navigation;