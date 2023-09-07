import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

export const ProtectedLoggedRouteElement = ({ element: Component, ...props }) => {
    const navigate = useNavigate();

    React.useEffect(() => {
        setTimeout(() => {
            if (!props.loggedIn) {
                navigate('/', { replace: true })
            } else {
                navigate(Component, { state: { from: props.location } });
            }
        }, 100);
    }, [props.loggedIn]);

    return (
        props.loggedIn ? <Component {...props} /> : ''
    )
};

export const ProtectedRouteElement = ({ element: Component, ...props }) => {
    return (
        !props.loggedIn ? <Component {...props} /> : <Navigate to="/" replace />
    )
};