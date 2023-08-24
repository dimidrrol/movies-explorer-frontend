import './FilterCheckbox.css';
import React from 'react';

function FilterCheckbox() {
    const [isToggle, setIsToggle] = React.useState(false);

    function handleToggle() {
        setIsToggle(!isToggle);
    }

    return (
        <div onClick={handleToggle} className={`filter-checkbox ${isToggle ? 'on' : 'off'}`}>
            <input type='checkbox' checked={isToggle} onChange={handleToggle} className='filter-checkbox__input' />
            <span className='filter-checkbox__slider'></span>
        </div>
    )
}

export default FilterCheckbox;