import './Register.css';
import LoginForm from '../LoginForm/LoginForm';
import Input from '../Input/Input';
import React from 'react';
import { useFormWithValidation } from '../FormValidation/FormValidation';

function Register(props) {
    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

    function handleSubmit(evt) {
        evt.preventDefault();
        props.onRegister(values.name, values.email, values.password);
        resetForm();
    };

    return (
        <main className='login'>
            <LoginForm
                title='Добро пожаловать!'
                submit='Зарегистрироваться'
                question='Уже зарегистрированы? '
                navigate='Войти'
                name='regiser-form'
                navigateLogin={props.navigateLogin}
                onHandleSubmit={handleSubmit}
                isValid={isValid}
                formError={props.formError}
            >
                <Input inputValue={values.name} onChange={handleChange} errors={errors.name} isValid={isValid} placeholder='Имя' type='text' name='name' />
                <Input inputValue={values.email} onChange={handleChange} errors={errors.email} isValid={isValid} placeholder='E-mail' type='email' name='email' />
                <Input inputValue={values.password} onChange={handleChange} errors={errors.password} isValid={isValid} placeholder='Пароль' type='password' name='password' />
            </LoginForm>
        </main>
    )
}

export default Register;