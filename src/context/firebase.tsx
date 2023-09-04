import { createContext } from 'react';
import * as firebaseAuth from 'firebase/auth';
interface FirebaseContextValue {
  user: firebaseAuth.User;
    // Add any Firebase-related properties or methods you intend to use in the context
    // For example, you might have a firebase instance, authentication methods, etc.
  }
export const FirebaseContext = createContext<FirebaseContextValue | null>(null);
