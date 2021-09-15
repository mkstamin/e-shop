import { useAuth0 } from '@auth0/auth0-react';
import React, { useContext, useEffect, useState } from 'react';

const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
    const { loginWithRedirect, user, logout } = useAuth0();

    const [myUser, setMyUser] = useState(null);

    // useEffect(() => {
    //     if (isAuthenticated) {
    //         setMyUser(user);
    //     } else {
    //         setMyUser(false);
    //     }
    // }, [isAuthenticated, user]);

    useEffect(() => {
        setMyUser(user);
    }, [user]);

    return (
        <UserContext.Provider value={{ loginWithRedirect, logout, myUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => useContext(UserContext);
