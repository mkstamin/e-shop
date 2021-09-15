/* eslint-disable react/jsx-props-no-spreading */
import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useAuth0();
    return <Route {...rest} render={() => (user ? children : <Redirect to="/" />)} />;
};
export default PrivateRoute;
