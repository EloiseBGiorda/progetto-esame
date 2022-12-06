import React, { useState, useEffect, useContext, createContext } from "react";
import { auth } from "../../firebase";
import { User, onAuthStateChanged } from "firebase/auth";

//interface of the authorization provider
export interface AuthProviderType {
  children: React.ReactNode;
}

//interface of the authorization context
interface AuthContextType {
  currentUser?: User | null;
  logOut: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  currentUser: undefined,
  logOut: async () => {},
});

export const AuthProvider = ({ children }: AuthProviderType) => {
  const [currentUser, setCurrentUser] = useState<User | null>();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
    return unsubscribe;
  }, []);

  const logOut = () => {
    auth
      .signOut()
      .then(() => {
        console.log("out");
      })
      .catch((err) => console.log(err));
  };

  return (
    <AuthContext.Provider value={{ currentUser, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserContext = () => {
  return useContext(AuthContext);
};
