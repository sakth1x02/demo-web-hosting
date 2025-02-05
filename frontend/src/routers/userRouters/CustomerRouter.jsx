import { Route, Routes } from 'react-router-dom';

import Home from '@/pages/customer/Home';
import ProductDetails from '@/pages/customer/ProductDetails';
import Cart from '@/pages/customer/Cart';
import Checkout from '@/pages/customer/Checkout';
import Orders from '@/pages/customer/Orders';
import Order from '@/pages/customer/Order';
import Profile from '@/pages/common/Profile';
import EditProfile from '@/pages/common/EditProfile';
import ChangePassword from '@/pages/common/ChangePassword';
import Logout from '@/pages/common/Logout';
import DeleteAccount from '@/pages/common/DeleteAccount';

const CustomerRouter = () => {
  console.log('customer router loaded');
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Home />} />
        <Route path='/product/:pid' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/order/:oid' element={<Order />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/editProfile' element={<EditProfile />} />
        <Route path='/changePassword' element={<ChangePassword />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/deleteAccount' element={<DeleteAccount />} />
      </Routes>
    </>
  );
};

export default CustomerRouter;
