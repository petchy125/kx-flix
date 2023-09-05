"use client";
import { createContext, useContext,useState,useEffect } from 'react';
import firebaseAuth, {
  onAuthStateChanged
} from 'firebase/auth';
import { firebase, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@/lib/firebase';
import { CommonProps } from '@/type/type';


interface FirebaseContextValue {
  username: firebaseAuth.User;
    // Add any Firebase-related properties or methods you intend to use in the context
    // For example, you might have a firebase instance, authentication methods, etc.
  }
export const FirebaseContext = createContext<FirebaseContextValue | null>(null);

export const useAuthContext = () => useContext(FirebaseContext);

export const AuthContextProvider = ({
  children,
}: CommonProps) => {
  const [username, setUsername] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            setUsername(username);
          } else {
            setUsername(null);
          }
          setLoading(false);
      });

      return () => unsubscribe();
  }, []);

  return (
      <FirebaseContext.Provider value={{ username,firebase }}>
          {loading ? <div>Loading...</div> : children}
      </FirebaseContext.Provider>
  );
};
