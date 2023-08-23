import './SearchForm.css';
import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
    return (
        <form className='search-form'>
            <div className='search-form__container'>
                <input type='text' placeholder='Фильм' className='search-form__input' />
                <button type='button' className='search-form__button button-hover'>Поиск</button>
            </div>
            <div className='search-form__toggle-container'>
                <FilterCheckbox />
                <p className='search-form__toggle-description'>Короткометражки</p>
            </div>
        </form>
    )
}

export default SearchForm;