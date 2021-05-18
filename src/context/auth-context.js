import React, { useState, useEffect } from 'react';

// It creates a default context. The context can be whatever variable
const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: f => f,
    onLogin: f => f
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storeUserLoggedInInformation = localStorage.getItem('isLoggedIn');
    
        if (storeUserLoggedInInformation === '1'){
          setIsLoggedIn(true);
        }
      }, []); // It just runs one, when the app is lauched, becauser the depency array is empty
    

    const logoutHandler = () => {
        localStorage.setItem('isLoggedIn', '0')
        setIsLoggedIn(false);
    }

    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1')
        setIsLoggedIn(true)
    }

    return(
        <AuthContext.Provider
            value = {{
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler,
                onLogin: loginHandler
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;