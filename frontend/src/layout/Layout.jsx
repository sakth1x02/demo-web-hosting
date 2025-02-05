import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Header />
      <div className='flex-grow-1'>
        {children}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
