import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { updateUser } from '@/utilities/api/UserAPIHandlers';

const ChangePassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setError(null);
      // Update user details
      try {
        const res = await updateUser({ password });
        console.log(res);
      } catch (error) {
        console.log(error);
      }
      console.log('Password changed successfully');
      navigate('/profile');
    } else {
      console.log('Passwords do not match');
      setError('Passwords do not match');
    }
  };

  return (
    <>
      <Helmet>
        <title>Change Password</title>
      </Helmet>
      <section className='container'>
        <div className='row py-lg-5'>
          <div className='col-lg-6 col-md-8 mx-auto'>
            <h1 className='text-center pb-3'>Change Password</h1>
            <p className='text-danger text-center'>{error}</p>
            <form>
              <fieldset>
                <div>
                  <label htmlFor='password' className='form-label mt-4'>
                    New Password
                  </label>
                  <div className='border border-secondary'>
                    <input
                      type='password'
                      id='password'
                      name='password'
                      className='form-control'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor='confirmPassword' className='form-label mt-4'>
                    Confirm New Password
                  </label>
                  <div className='border border-secondary'>
                    <input
                      type='password'
                      id='confirmPassword'
                      name='confirmPassword'
                      className='form-control'
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>
              </fieldset>
              <div className='text-center'>
                <button
                  type='button'
                  className='btn btn-success mt-3'
                  onClick={(e) => handleChangePassword(e)}
                >
                  Change Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChangePassword;
