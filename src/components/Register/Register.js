import './Register.css';
import LoginForm from '../LoginForm/LoginForm';
import Input from '../Input/Input';
import React from 'react';

function Register(props) {
    return (
        <div className='login'>
            <LoginForm
                title='Добро пожаловать!'
                submit='Зарегистрироваться'
                question='Уже зарегистрированы? '
                navigate='Войти'
                navigateLogin={props.navigateLogin}
                navigateMain={props.navigateMain}
            >
                <Input name='Имя' value='Виталий' type='text' />
                <Input name='E-mail' value='pochta@yandex.ru|' type='email' />
                <Input name='Пароль' value='fgsdfgsdfgsdfg' type='password' />
            </LoginForm>
        </div>
    )
}

export default Register;