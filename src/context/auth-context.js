import React from 'react';

// It creates a default context. The context can be whatever variable
const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: f => f
});

export default AuthContext;