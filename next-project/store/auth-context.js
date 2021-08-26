import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {}
});

export const AuthContextProvider = (props) => {
    const ISSERVER = typeof window === "undefined";
    const initToken = !ISSERVER && localStorage.getItem('token');
    const [token, setToken] = useState(initToken);
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        token ? setIsLogin(true) : setIsLogin(false)
    },[token]);

    const loginHandler = () => {
        setIsLogin(true)
        setToken(token);
        !ISSERVER && localStorage.setItem('token', token);
    }

    const logoutHandler = () => {
        setToken(null);
        setIsLogin(false)
        !ISSERVER && localStorage.removeItem('token')
    }

    const contextValue = {
        token: token,
        isLoggedIn: isLogin,
        login: loginHandler,
        logout: logoutHandler
    }

    return (
        <AuthContext.Provider value={contextValue}>
            { props.children }
        </AuthContext.Provider>
    )
};

export default AuthContext;