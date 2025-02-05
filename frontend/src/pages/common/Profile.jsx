import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { AuthContext } from '@/contexts/AuthContext';
import { getUser } from '@/utilities/api/UserAPIHandlers';

const Profile = () => {
  const { currentUser } = useContext(AuthContext);

  const [user, setUser] = useState({});

  const fetchUserDetails = async () => {
    try {
      const res = await getUser(currentUser.id);
      setUser(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <section className='container'>
        <div className='row py-lg-5'>
          <div className='mx-auto'>
            <h1 className='text-center pb-3 pt-md-0 pt-sm-5'>Profile</h1>
            <div className='container'>
              <div className='row'>
                <div className='col-md-6'>
                  <section className='container'>
                    <div className='row py-lg-3'>
                      <div className='mx-auto'>
                        <h3 className='text-center pb-3'>
                          Profile Information
                        </h3>
                        <table className='table'>
                          <tbody>
                            <tr>
                              <th scope='row'>Name</th>
                              <td>{user.name}</td>
                            </tr>
                            <tr>
                              <th scope='row'>Email</th>
                              <td>{user.email}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>
                </div>
                <div className='col-md-6'>
                  <section className='container'>
                    <div className='row py-lg-3'>
                      <div className='col-lg-6 col-md-8 mx-auto'>
                        <h3 className='text-center'>Options</h3>
                        <table className='table'>
                          <tbody>
                            <tr>
                              <td className='pt-1'></td>
                            </tr>
                            {currentUser.role == 'USER' && (
                              <tr>
                                <td className='p-0 pt-1 text-center'>
                                  <Link to='/orders'>
                                    <button
                                      type='button'
                                      className='btn btn-primary custom'
                                    >
                                      View Orders
                                    </button>
                                  </Link>
                                </td>
                              </tr>
                            )}
                            <tr>
                              <td className='p-0 pt-2 text-center'>
                                <Link to='/editProfile'>
                                  <button
                                    type='button'
                                    className='btn btn-warning custom'
                                  >
                                    Edit Profile
                                  </button>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className='p-0 pt-2 text-center'>
                                <Link to='/changePassword'>
                                  <button
                                    type='button'
                                    className='btn btn-success custom'
                                  >
                                    Change Password
                                  </button>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className='p-0 pt-2 text-center'>
                                <Link to='/logout'>
                                  <button
                                    type='button'
                                    className='btn btn-info custom'
                                  >
                                    Logout
                                  </button>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className='p-0 pt-2 text-center'>
                                <Link to='/deleteAccount'>
                                  <button
                                    type='button'
                                    className='btn btn-danger custom'
                                  >
                                    Delete Account
                                  </button>
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
