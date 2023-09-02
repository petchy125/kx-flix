import { createContext } from 'react';
interface FirebaseContextValue {
    firebase: Function;
    // Add any Firebase-related properties or methods you intend to use in the context
    // For example, you might have a firebase instance, authentication methods, etc.
  }
export const FirebaseContext = createContext<FirebaseContextValue | null>(null);
