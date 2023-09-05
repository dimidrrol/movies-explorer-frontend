import './Input.css';
import React from 'react';

function Input(props) {
    return (
        <div className='input'>
            <label className='input__label'>{props.name}</label>
            <input onChange={props.onChange} className='input__input' type={props.type} placeholder={props.placeholder} value={props.inputValue || ''} name={props.name} required />
            <span className='input__error-message'>{props.errors}</span>
        </div>
    )
}

export default Input;