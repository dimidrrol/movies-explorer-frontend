import './Title.css';
import React from 'react';

function Title(props) {
    return (
        <div className='title'>
            <h2 className='title__text'>{props.title}</h2>
        </div>
    )
}

export default Title;