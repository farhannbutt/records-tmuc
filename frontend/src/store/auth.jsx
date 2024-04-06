import { createContext, useContext, useState } from "react";

// Create the context
export const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  // State to store the token
  const [token, setToken] = useState(localStorage.getItem('token'));

  // Function to store the token in local storage
  const storeTokenInLs = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken); // Update the token state
  };

  // Adding functionality for whether logged in or logged out
  const isloggedin = !!token;

  // Adding the logout functionality
  const LogoutUser = () =>{
    setToken(""); // Clear the token state
    localStorage.removeItem('token'); // Remove the token from local storage
  };

  // Provide the authentication context value to its children
  return (
    <AuthContext.Provider value={{ isloggedin, storeTokenInLs, LogoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to consume the authentication context
export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
