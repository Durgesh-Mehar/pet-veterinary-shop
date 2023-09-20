import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  Login: (token) => {},
  Logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");

  const [token, settoken] = useState(initialToken);

  const userIsLoggedIn =!!token;

  const loginHandler = (token) => {
   
    settoken(token);
    localStorage.setItem("token", token);
    
  };

  const logoutHandler = () => {
    console.log("Logging out...");

    try {
      localStorage.removeItem("token");
      console.log("Token removed from localStorage.");
    } catch (error) {
      console.error("Error removing token from localStorage:", error);
    }
    
    settoken("");
   
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    Login: loginHandler,
    Logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
