import { useContext } from 'react';

import { AuthContext } from '@/contexts/AuthContext';
import { getUserDetails } from '@/utilities/AuthUtilities';
import ProtectedRoute from '@/routers/protectedRoute/ProtectedRoute';
import CustomerRouter from './CustomerRouter';
import AdminRouter from './AdminRouter';

const UserRouter = () => {
  // const { currentUser } = useContext(AuthContext);
  // const localStorageUser = getUserDetails();

  // const user = currentUser || localStorageUser;

  const { currentUser } = useContext(AuthContext);

  return (
    <ProtectedRoute>
      {currentUser.role == 'ADMIN' ? <AdminRouter /> : <CustomerRouter />}
    </ProtectedRoute>
  );
};

export default UserRouter;
