'use client';
import React from 'react';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from '@/lib/firebase';

const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState();
  const login = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = async () => {
    return await signOut(auth);
  };

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          email: user.email,
          uid: user.uid,
        });
      } else {
        setUser({ email: null, uid: null });
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
