import React, { useCallback } from "react";

export function useForm() {
    const [values, setValues] = React.useState({});

    const handleChange = (evt) => {
        const target = evt.target;
        const value = target.value;
        const name = target.name;
        setValues({ ...values, [name]: value });
    };

    return { values, handleChange, setValues };
};

export function useFormWithValidation() {
    const [values, setValues] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);
    const emailPattern = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    const namePattern = /^[a-zA-Zа-яА-ЯёЁ\s-]+$/;

    const handleChange = useCallback((evt) => {
        const target = evt.target;
        const value = target.value;
        const name = target.name;
        if (name === 'email') {
            setErrors({ ...errors, [name]: value.match(emailPattern) ? '' : 'Введите корректный Email' });
        } else if (name === 'name') {
            setErrors({ ...errors, [name]: value.match(namePattern) ? '' : 'Введите корректное имя'});
        } else {
            setErrors({ ...errors, [name]: target.validationMessage });
        }
        setValues({ ...values, [name]: value });
        setIsValid(target.closest('form').checkValidity());
    }, [values, errors]);

    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setValues(newValues);
            setErrors(newErrors);
            setIsValid(newIsValid);
        },
        [setValues, setErrors, setIsValid]
    );

    return {
        values,
        handleChange,
        errors,
        isValid,
        resetForm,
        emailPattern
    };
};