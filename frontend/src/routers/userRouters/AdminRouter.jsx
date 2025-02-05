import { Route, Routes } from 'react-router-dom';

import AdminHome from '@/pages/admin/AdminHome';
import EditProduct from '@/pages/admin/EditProduct';
import Profile from '@/pages/common/Profile';
import EditProfile from '@/pages/common/EditProfile';
import ChangePassword from '@/pages/common/ChangePassword';
import Logout from '@/pages/common/Logout';
import DeleteAccount from '@/pages/common/DeleteAccount';
import AddProduct from '@/pages/admin/AddProduct';

const AdminRouter = () => {
  console.log('admin router loaded');
  return (
    <>
      <Routes>
        <Route path='/products' element={<AdminHome />} />
        <Route path='/addProduct' element={<AddProduct />} />
        <Route path='/editProduct/:pid' element={<EditProduct />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/editProfile' element={<EditProfile />} />
        <Route path='/changePassword' element={<ChangePassword />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/deleteAccount' element={<DeleteAccount />} />
      </Routes>
    </>
  );
};

export default AdminRouter;
