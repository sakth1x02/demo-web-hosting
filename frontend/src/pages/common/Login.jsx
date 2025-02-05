import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { AuthContext } from '@/contexts/AuthContext';
import { logIn } from '@/utilities/api/AuthAPIHandlers';
import { getUserDetails, saveUserDetails } from '@/utilities/AuthUtilities';

const Login = () => {
  const currentUser = getUserDetails();
  const { setCurrentUser } = useContext(AuthContext);
  const [error, setErrMsg] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser?.token) navigate('/');
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      setErrMsg('Email and Password are required');
      return;
    }

    try {
      const res = await logIn({ email, password });
      saveUserDetails(res);
      setCurrentUser(res);
      navigate('/products');
    } catch (error) {
      setErrMsg('Invalid email or password');
    }
  };

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <section className='container'>
        <div className='row py-lg-5'>
          <div className='col-lg-6 col-md-8 mx-auto'>
            <h1 className='text-center pb-3'>Login</h1>
            <p className='text-danger text-center'>{error}</p>
            <form>
              <fieldset>
                <div className='row pb-2'>
                  <label htmlFor='email' className='col-sm-2 col-form-label'>
                    Email
                  </label>
                  <div className='col-sm-10 border border-secondary'>
                    <input
                      type='email'
                      id='email'
                      data-testid='email'
                      name='email'
                      className='form-control-plaintext'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className='row pb-2'>
                  <label htmlFor='password' className='col-sm-2 col-form-label'>
                    Password
                  </label>
                  <div className='col-sm-10 border border-secondary'>
                    <input
                      type='password'
                      id='password'
                      data-testid='password'
                      name='password'
                      className='form-control-plaintext'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
              </fieldset>
              <div className='text-center'>
                <button
                  type='button'
                  className='btn btn-success mt-2'
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
            </form>
            <div className='d-flex justify-content-center'>
              <p className='mt-3 text-right text-muted'>
                Don&apos;t have an account?{' '}
                <a
                  href='/register'
                  className='font-weight-bold text-primary text-decoration-none'
                >
                  Register
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
