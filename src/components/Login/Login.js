import './Login.css';
import LoginForm from '../LoginForm/LoginForm';
import Input from '../Input/Input';
import React from 'react';
import { useFormWithValidation } from '../FormValidation/FormValidation';

function Login(props) {
    const { values, handleChange, errors, isValid, resetForm} = useFormWithValidation();

    function handleSubmit(evt) {
        evt.preventDefault();
        props.onLogin(values.email, values.password);
        resetForm();
    };

    return (
        <main className='login'>
            <LoginForm
                title='Рады видеть!'
                submit='Войти'
                question='Ещё не зарегистрированы? '
                navigate='Регистрация'
                name='login-form'
                navigateRegister={props.navigateRegister}
                onHandleSubmit={handleSubmit}
                isValid={isValid}
                formError={props.formError}
            >
                <Input inputValue={values.email} onChange={handleChange} errors={errors.email} isValid={isValid} placeholder='E-mail' type='email' name='email' />
                <Input inputValue={values.password} onChange={handleChange} errors={errors.password} isValid={isValid} placeholder='Пароль' type='password' name='password' />
            </LoginForm>
        </main>
    )
}

export default Login;