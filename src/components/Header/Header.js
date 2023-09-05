import logo from '../../images/logo.svg';
import React from 'react';
import { useLocation } from 'react-router-dom';
import AccountButton from '../AccountButton/AccountButton';
import hamburgerIcon from '../../images/hamburger-icon.svg';
import './Header.css';

function Header(props) {
    const location = useLocation();

    return (
        <header className={location.pathname === '/' ? 'header header_main' : 'header'}>
            <a href='/' className='header__logo link-hover'><img src={logo} alt='Логотип' /></a>
            {props.loggedIn ? (
                <nav className="header__nav header__nav_type_logged">
                    <button onClick={props.navigateMovies} type="button" className="header__button header__button_type_films button-hover">Фильмы</button>
                    <button onClick={props.navigateSavedMovies} type="button" className="header__button header__button_type_saved-films button-hover">Сохранённые фильмы</button>
                    <div className='header__button'>
                        <AccountButton navigateProfile={props.navigateProfile} />
                    </div>
                    <button onClick={props.onHamburgerClick} type='button' className='header__hamburger-button button-hover'>
                        <img src={hamburgerIcon} alt='Контекстное меню' />
                    </button>
                </nav>
            ) : (
                <nav className="header__nav header__nav_type_unlogged">
                    <button onClick={props.navigateRegister} type="button" className="header__button header__button_type_register button-hover">Регистрация</button>
                    <button onClick={props.navigateLogin} type="button" className="header__button-login button-hover">Войти</button>
                </nav>
            )}
        </header>
    )
}

export default Header;