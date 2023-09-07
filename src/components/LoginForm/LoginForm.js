import './LoginForm.css';
import logo from '../../images/logo.svg';
import React from 'react';
import { useLocation } from 'react-router-dom';

function LoginForm(props) {
  const location = useLocation();

  return (
    <form name={props.name} onSubmit={props.onHandleSubmit} className='login-form'>
      <a href='/' className='login-form__logo link-hover'><img src={logo} alt='Логотип' /></a>
      <h2 className='login-form__title'>{props.title}</h2>
      <div className='login-form__input-container'>
        {props.children}
      </div>
      <div className='login-form__button-container'>
        <span className='button-error'>{props.formError}</span>
        <button onClick={props.onHandleSubmit} type='submit' form={props.name} disabled={props.isValid ? false : true} className={`login-form__submit-button ${props.isValid ? 'button-hover' : 'login-form__submit-button_disabled'}`}>{props.submit}</button>
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