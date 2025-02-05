/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from '@/contexts/AuthContext';
import { getUserDetails } from '@/utilities/AuthUtilities';

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const localStorageUser = getUserDetails();

  if (!currentUser && !localStorageUser?.token) {
    // if (!currentUser) {
    console.log(currentUser);
    // console.log(localStorageUser)
    console.log('Not logged in. Navigating to login page');
    return <Navigate to={'/login'} />;
  }
  return children;
};

export default ProtectedRoute;
