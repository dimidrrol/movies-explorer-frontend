import './Login.css';
import LoginForm from '../LoginForm/LoginForm';
import Input from '../Input/Input';
import React from 'react';

function Login(props) {
    return (
        <main className='login'>
            <LoginForm
                title='Рады видеть!'
                submit='Войти'
                question='Ещё не зарегистрированы? '
                navigate='Регистрация'
                navigateRegister={props.navigateRegister}
            >
                <Input name='E-mail' value='pochta@yandex.ru|' type='email' />
                <Input name='Пароль' value='fgsdfgsdfgsdfg' type='password' />
            </LoginForm>
        </main>
    )
}

export default Login;