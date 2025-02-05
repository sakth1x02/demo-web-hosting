import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '@/contexts/AuthContext';
import { removeUserDetails } from '@/utilities/AuthUtilities';

const Logout = () => {
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(AuthContext);

  useEffect(() => {
    removeUserDetails();
    setCurrentUser(null);
    navigate('/login');
  }, []);

  return <div>Logout</div>;
};

export default Logout;
