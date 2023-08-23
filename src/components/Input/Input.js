import './Input.css';
import React from 'react';

function Input(props) {
    return (
        <div className='input'>
            <label className='input__label'>{props.name}</label>
            <input className='input__input' type={props.type} value={props.value} />
            <span className='input__error-message'>Что-то пошло не так...</span>
        </div>
    )
}

export default Input;