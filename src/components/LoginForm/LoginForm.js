import './LoginForm.css';
import logo from '../../images/logo.svg';
import React from 'react';
import { useLocation } from 'react-router-dom';

function LoginForm(props) {
  const location = useLocation();

  return (
    <form className='login-form'>
      <img onClick={props.navigateMain} src={logo} alt='Логотип' className='login-form__logo' />
      <h2 className='login-form__title'>{props.title}</h2>
      <div className='login-form__input-container'>
        {props.children}
      </div>
      <div className='login-form__button-container'>
        <button type='button' className='login-form__submit-button button-hover'>{props.submit}</button>
        <p className='login-form__question'>{props.question}
          <button onClick={location.pathname === '/signup' ? props.navigateLogin : props.navigateRegister} type='button' className='login-form__navigate-button button-hover'>
            {props.navigate}
          </button>
        </p>
      </div>
    </form>
  )
}

export default LoginForm;