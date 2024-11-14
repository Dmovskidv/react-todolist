import { useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth"; // Or your preferred auth provider
import React from "react";
import { auth } from "../services/firebase/config";

interface IAuthContext {
  currentUser: unknown;
  setCurrentUser: (user: unknown) => void;
  userLoggedIn: boolean;
  loading: boolean;
}

const AuthContext = React.createContext<IAuthContext | null>(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [currentUser, setCurrentUser] = useState<unknown>(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const initializeUser = (user: unknown) => {
    if (user) {
      setCurrentUser(user);
      setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  const contextValue = {
    currentUser,
    setCurrentUser,
    userLoggedIn,
    loading,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
