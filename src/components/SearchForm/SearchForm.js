import './SearchForm.css';
import React from 'react';
import { useLocation } from 'react-router-dom';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {
    const localSearchValue = localStorage.getItem('searchValue');
    const location = useLocation();

    function handleSearchChange(evt) {
        const searchValue = evt.target.value;
        localStorage.setItem('searchValue', searchValue);
        props.onHandleSearchValue(searchValue);
    };

    function handleSavedSearchValue(evt) {
        const searchValue = evt.target.value;
        props.onHandleSavedSearchValue(searchValue);
    };

    function handleSubmit(evt) {
        evt.preventDefault();
        if (location.pathname === '/movies') {
            props.getMovies();
        } else {
            props.onHandleSearch();
        }
    };

    return (
        <form onSubmit={handleSubmit} className='search-form'>
            <div className='search-form__container'>
                {location.pathname === '/movies' ? (
                    <input onChange={handleSearchChange} value={localSearchValue ? localSearchValue || '' : props.searchValue || ''} type='text' placeholder='Фильм' className='search-form__input' />
                ) : (
                    <input onChange={handleSavedSearchValue} value={props.savedSearchValue || ''} type='text' placeholder='Фильм' className='search-form__input' />
                )}
                <button type='submit' className='search-form__button button-hover'>Поиск</button>
            </div>
            <div className='search-form__toggle-container'>
                <FilterCheckbox isSwitch={props.isSwitch} onHandleToggleSwitch={props.onHandleToggleSwitch} isSwitchOn={props.isSwitchOn} onToggleSwitchShortMovies={props.onToggleSwitchShortMovies} />
                <p className='search-form__toggle-description'>Короткометражки</p>
            </div>
        </form>
    )
}

export default SearchForm;