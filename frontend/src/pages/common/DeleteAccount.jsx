/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { AuthContext } from '@/contexts/AuthContext';
import { removeUserDetails } from '@/utilities/AuthUtilities';
import { deleteUser } from '@/utilities/api/UserAPIHandlers';

const DeleteAccount = () => {
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const handleDeleteAccount = async (e) => {
    try {
      const res = await deleteUser();
      if (res) {
        console.log('Account deleted successfully');
        removeUserDetails();
        setCurrentUser(null);
        navigate('/signup');
      } else {
        console.log('Account deletion failed');
        setError('Account deletion failed');
      }
    } catch (error) {
      console.log('Error during API call', error);
      setError('Error during API call');
    }
  };

  return (
    <>
      <Helmet>
        <title>Delete Account</title>
      </Helmet>
      <section className='container'>
        <div className='row py-lg-5'>
          <div className='col-lg-6 col-md-8 mx-auto'>
            <h1 className='text-center pb-3'>Delete Account</h1>
            <p className='text-danger text-center'>{error}</p>
            <div className='alert alert-dismissible alert-danger'>
              <div className='text-center'>
                <p>Are you sure you want to delete your account?</p>
                <button
                  type='button'
                  className='btn btn-danger'
                  onClick={(e) => handleDeleteAccount(e)}
                >
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DeleteAccount;
