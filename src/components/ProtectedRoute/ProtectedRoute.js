import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedLoggedRouteElement = ({ element: Component, ...props }) => {
    return (
        props.loggedIn ? <Component {...props} /> : <Navigate to="/" replace />
    )
}

const ProtectedRouteElement = ({ element: Component, ...props }) => {
    return (
        !props.loggedIn ? <Component {...props} /> : <Navigate to="/" replace />
    )
}

export default ProtectedLoggedRouteElement;