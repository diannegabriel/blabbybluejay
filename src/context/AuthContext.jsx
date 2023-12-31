import { createContext, useContext, useState } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import { useEffect } from "react";

// The purpose of this is to get the current value (the user) at any page
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sign in with Google
  const signInGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  // Sign out
  const logOut = () => signOut(auth);

  const value = {
    currentUser,
    setCurrentUser,
    signInGoogle,
    logOut,
  };

  // Set current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
