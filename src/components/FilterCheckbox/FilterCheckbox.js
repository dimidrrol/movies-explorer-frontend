import './FilterCheckbox.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

function FilterCheckbox(props) {
    const location = useLocation();

    function handleToggle() {
        if (location.pathname === '/movies') {
            props.onToggleSwitchShortMovies();
        } else {
            props.onHandleToggleSwitch();
        }

    }

    return (
        <>
            {location.pathname === '/movies' ?
                (<div onClick={handleToggle} className={`filter-checkbox ${props.isSwitchOn ? 'on' : 'off'}`}>
                    <input type='checkbox' checked={props.isSwitchOn} onChange={handleToggle} className='filter-checkbox__input' />
                    <span className='filter-checkbox__slider'></span>
                </div>) :
                (<div onClick={handleToggle} className={`filter-checkbox ${props.isSwitch ? 'on' : 'off'}`}>
                    <input type='checkbox' checked={props.isSwitch} onChange={handleToggle} className='filter-checkbox__input' />
                    <span className='filter-checkbox__slider'></span>
                </div>)}
        </>
    )
}

export default FilterCheckbox;