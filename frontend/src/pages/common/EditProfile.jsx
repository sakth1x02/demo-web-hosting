import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { getUser, updateUser } from '@/utilities/api/UserAPIHandlers';

const EditProfile = () => {
  const [name, setName] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    console.log('fetching user details for editing');

    const fetchUserDetails = async () => {
      const user = await getUser();
      setName(user.name || '');
    };

    fetchUserDetails();
  }, []);

  const saveProfileChanges = async (e) => {
    e.preventDefault();
    console.log('updating user details');

    // Update user details
    try {
      const res = await updateUser({ name: name });
      console.log(res);
      navigate('/profile');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Edit Profile</title>
      </Helmet>
      <section className='container'>
        <div className='row py-lg-5'>
          <div className='col-lg-6 col-md-8 mx-auto'>
            <h1 className='text-center pb-3'>Edit Profile</h1>
            <form>
              <fieldset>
                <div>
                  <label htmlFor='name' className='form-label mt-4'>
                    Name
                  </label>
                  <div className='border border-secondary'>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      className='form-control'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
              </fieldset>
              <div className='text-center'>
                <button
                  type='button'
                  className='btn btn-success mt-3'
                  onClick={(e) => saveProfileChanges(e)}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditProfile;
