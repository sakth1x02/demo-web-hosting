import { Route, Routes } from 'react-router-dom';

import Home from '@/pages/common/Home';
import Login from '@/pages/common/Login';
import Register from '@/pages/customer/Register';
import SearchListing from '@/pages/common/SearchListing';
import UserRouter from '@/routers/userRouters/UserRouter';

const PageRouter = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/register' element={<Register />} />
      <Route
        path='/products/search/:searchString'
        element={<SearchListing />}
      />
      <Route path='/*' element={<UserRouter />} />
    </Routes>
  );
};

export default PageRouter;
