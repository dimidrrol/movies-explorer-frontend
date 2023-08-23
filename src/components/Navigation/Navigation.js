import './Navigation.css';
import AccountButton from '../AccountButton/AccountButton';
import React from 'react';

function Navigation(props) {
    return (
        <div className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className='popup__container'>
                <button onClick={props.onClose} type='button' className='popup__close-button button-hover' />
                <div className='popup__button-container'>
                    <button onClick={props.navigateMain} type='button' className='popup__button button-hover'>Главная</button>
                    <button onClick={props.navigateMovies} type='button' className='popup__button button-hover'>Фильмы</button>
                    <button onClick={props.navigateSavedMovies} type='button' className='popup__button button-hover'>Сохранённые фильмы</button>
                </div>
                <AccountButton navigateProfile={props.navigateProfile} />
            </div>
        </div>
    )
}

export default Navigation;