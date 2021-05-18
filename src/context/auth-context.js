import React from 'react';

// It creates a default context. The context can be whatever variable
const AuthContext = React.createContext({
    isLoggedIn: false
});

export default AuthContext;