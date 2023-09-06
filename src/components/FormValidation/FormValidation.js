import React, { useCallback } from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

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
    const [initialValues, setInitialValues] = React.useState({});
    const currentUser = React.useContext(CurrentUserContext);
    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    const namePattern = /^[\p{L}\s\-]*[\p{L}][\p{L}\s\-]*$/u;

    const handleChange = useCallback((evt) => {
        const target = evt.target;
        const value = target.value;
        const name = target.name;

        if (name === 'email') {
            setErrors({ ...errors, [name]: value.match(emailPattern) ? '' : 'Введите корректный Email' });
        } else if (name === 'name') {
            setErrors({ ...errors, [name]: value.match(namePattern) ? '' : 'Введите корректное имя' });
        } else {
            setErrors({ ...errors, [name]: target.validationMessage });
        }
        setValues({ ...values, [name]: value });
        setIsValid(target.closest('form').checkValidity());
    }, [values, errors]);

    React.useEffect(() => {
        setValues({
            name: currentUser.name || '',
            email: currentUser.email || '',
        });
    }, [currentUser]);

    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setInitialValues(newValues);
            setErrors(newErrors);
            setIsValid(newIsValid);
        },
        [setInitialValues, setErrors, setIsValid]
    );

    return {
        values,
        handleChange,
        errors,
        isValid,
        resetForm,
        emailPattern,
        initialValues,
        setInitialValues,
        setValues,
        namePattern
    };
};