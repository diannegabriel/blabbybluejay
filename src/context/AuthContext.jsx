import { createContext, useContext, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithRedirect } from "firebase/auth";
import { auth } from "../firebase";

// The purpose of this is to get the current value (the user) at any page
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // Sign in with Google
  const signInGoogle = new GoogleAuthProvider();

  const auth = getAuth();
  signInWithRedirect(auth, signInGoogle);

  const value = {
    currentUser,
    setCurrentUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
