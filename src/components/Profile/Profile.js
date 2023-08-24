import './Profile.css';
import Header from '../Header/Header';
import React from 'react';

function Profile(props) {
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
      />
      <main>
        <form className='profile-form' name='profile-form'>
          <h2 className='profile-form__title'>Привет, Виталий!</h2>
          <div className='profile-form__input-container'>
            <p className='profile-form__input-name'>Имя</p>
            <input type='text' placeholder='Имя' value={'Виталий'} className='profile-form__input' required />
          </div>
          <div className='profile-form__input-container'>
            <p className='profile-form__input-name'>E-mail</p>
            <input type='text' placeholder='E-mail' value={'pochta@yandex.ru'} className='profile-form__input' required />
          </div>
          <div className='profile-form__button-container'>
            <button type='button' className='profile-form__button button-hover'>Редактировать</button>
            <button type='button' className='profile-form__button profile-form__button_type_logout button-hover'>Выйти из аккаунта</button>
          </div>
        </form>
      </main>
    </>
  )
}

export default Profile;