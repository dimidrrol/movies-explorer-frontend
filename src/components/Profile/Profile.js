import './Profile.css';
import Header from '../Header/Header';
import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../FormValidation/FormValidation';

function Profile(props) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

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
          <h2 className='profile-form__title'>{`Привет, ${name}!`}</h2>
          <div className='profile-form__input-container'>
            <p className='profile-form__input-name'>Имя</p>
            <input onChange={handleChange} name='name' type='text' placeholder={name} value={values.name || ''} className='profile-form__input' required />
            <span className='profile-form__error'>{errors.name}</span>
          </div>
          <div className='profile-form__input-container'>
            <p className='profile-form__input-name'>E-mail</p>
            <input onChange={handleChange} name='email' type='email' placeholder={email} value={values.email || ''} className='profile-form__input' required />
            <span className='profile-form__error'>{errors.email}</span>
          </div>
          <div className='profile-form__button-container'>
            <span className='button-error'>{props.formError}</span>
            <button type='submit' disabled={isValid ? false : true} className={`profile-form__button ${isValid ? 'button-hover' : 'profile-form__button_disabled'} `}>Редактировать</button>
            <button onClick={props.onLogout} type='button' className='profile-form__button profile-form__button_type_logout button-hover'>Выйти из аккаунта</button>
          </div>
        </form>
      </main>
    </>
  )
}

export default Profile;