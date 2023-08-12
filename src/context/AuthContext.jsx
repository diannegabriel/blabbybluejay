import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <AuthContext.Provider>
      {children}
    </AuthContext.Provider>
  )
}