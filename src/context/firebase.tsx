"use client";
import { createContext, useContext,useState } from 'react';
import firebaseAuth, {
   createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, Auth
} from 'firebase/auth';
import { FirebaseApp } from 'firebase/app';


interface FirebaseContextValue {
  username?: firebaseAuth.User;
  firebase: FirebaseApp;
  auth: Auth;
  createUserWithEmailAndPassword: any;
  signInWithEmailAndPassword: any;
  signOut: any;
  onAuthStateChanged: any;
    // Add any Firebase-related properties or methods you intend to use in the context
    // For example, you might have a firebase instance, authentication methods, etc.
  }
export const FirebaseContext = createContext(null);

export const useAuthContext = () => useContext(FirebaseContext);