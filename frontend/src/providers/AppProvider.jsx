import PropTypes from 'prop-types';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const AppProvider = ({ children }) => {
  return (
    <HelmetProvider>
      <Helmet
        titleTemplate='%s | E-commerce Website'
        defaultTitle='E-commerce Website'
      />
      <ToastContainer theme='dark' />
      {children}
    </HelmetProvider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node,
};

export default AppProvider;
