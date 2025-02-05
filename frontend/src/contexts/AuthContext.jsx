/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import { getUserDetails } from '@/utilities/AuthUtilities';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(getUserDetails());

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
