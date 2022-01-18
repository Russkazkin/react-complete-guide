import React, { useState } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const logoutHandler = () => setIsLoggedIn(false);
  const loginHandler = () => setIsLoggedIn(true);

  return (
    <AuthContext.Provider value={{ isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
