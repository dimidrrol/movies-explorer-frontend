import './Profile.css';
import Header from '../Header/Header';
import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../FormValidation/FormValidation';

function Profile(props) {
  const { values, handleChange, errors, isValid, resetForm, namePattern, emailPattern } = useFormWithValidation();
  const currentUser = React.useContext(CurrentUserContext);

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onPatchUser(values.name, values.email);
    resetForm();
  };

  return (
    <>
      <Header
        onHamburgerClick={props.onHamburgerClick}
        navigateMain={props.navigateMain}
        navigateMovies={props.navigateMovies}
        navigateSavedMovies={props.navigateSavedMovies}
        navigateProfile={props.navigateProfile}
        navigateLogin={props.navigateLogin}
        navigateRegister={props.navigateRegister}
        loggedIn={props.loggedIn}
      />
      <main>
        <form onSubmit={handleSubmit} className='profile-form' name='profile-form'>
          <h2 className='profile-form__title'>{`Привет, ${currentUser.name}!`}</h2>
          <div className='profile-form__input-container'>
            <p className='profile-form__input-name'>Имя</p>
            <input pattern={namePattern.source} onChange={handleChange} name='name' type='text' placeholder='Имя' value={values.name || ''} className='profile-form__input' />
            <span className='profile-form__error'>{errors.name}</span>
          </div>
          <div className='profile-form__input-container'>
            <p className='profile-form__input-name'>E-mail</p>
            <input pattern={emailPattern.source} onChange={handleChange} name='email' type='email' placeholder='Email' value={values.email || ''} className='profile-form__input' />
            <span className='profile-form__error'>{errors.email}</span>
          </div>
          <div className='profile-form__button-container'>
            <span className='button-error'>{props.formError}</span>
            <button type='submit' disabled={(isValid && (values.name !== currentUser.name || values.email !== currentUser.email)) ? false : true} className={`profile-form__button ${(isValid && (values.name !== currentUser.name || values.email !== currentUser.email)) ? 'button-hover' : 'profile-form__button_disabled'} `}>Редактировать</button>
            <button onClick={props.onLogout} type='button' className='profile-form__button profile-form__button_type_logout button-hover'>Выйти из аккаунта</button>
          </div>
        </form>
      </main>
    </>
  )
}

export default Profile;