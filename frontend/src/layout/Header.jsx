import { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { FaShoppingBag } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import { AuthContext } from '@/contexts/AuthContext';

const Header = () => {
  const { currentUser } = useContext(AuthContext);

  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  const handleSearch = () => {
    console.log('searching for:', search);
    navigate(`products/search/${search.replace(' ', '+')}`);
  };

  return (
    <div className='bg-primary'>
      <div className='container'>
        <header className='d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-3 mt-3'>
          <div className='d-flex align-items-center col-md-3 mb-2 mb-md-0'>
            <IconContext.Provider
              value={{
                color: 'white',
                size: '40px',
              }}
            >
              <a href='/' aria-label='Logo' className='mb-2'>
                <FaShoppingBag />
              </a>
            </IconContext.Provider>
            <ul className='nav ms-3 mb-md-0'>
              {currentUser && (
                <>
                  {currentUser.role == 'USER' ? (
                    <li className=''>
                      <NavLink to='/'>
                        <button type='button' className='btn btn-primary'>
                          Home
                        </button>
                      </NavLink>
                    </li>
                  ) : null}
                  <li>
                    <NavLink to='/products'>
                      <button type='button' className='btn btn-primary'>
                        Products
                      </button>
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>

          <div className='nav col-12 col-md-auto mb-2 justify-content-center mb-md-0'>
            <form className='d-flex'>
              <input
                className='form-control me-sm-2'
                type='search'
                placeholder='Search'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                className='btn btn-secondary my-2 my-sm-0'
                type='submit'
                onClick={handleSearch}
              >
                Search
              </button>
            </form>
          </div>

          <div className='col-md-3 text-end'>
            {currentUser == null ? (
              <>
                <Link to='/login'>
                  <button
                    type='button'
                    className='btn btn-outline-success me-2'
                  >
                    Sign in
                  </button>
                </Link>
                <Link to='/register'>
                  <button
                    type='button'
                    className='btn btn-success border-2 border-success'
                  >
                    Create an account
                  </button>
                </Link>
              </>
            ) : (
              <div className='d-flex align-items-center col-md-3 mb-2 mb-md-0'>
                {currentUser.role == 'USER' && (
                  <Link to={'/cart'}>
                    <div className='me-3'>
                      <IconContext.Provider
                        value={{
                          color: 'white',
                          size: '25px',
                        }}
                      >
                        <MdOutlineShoppingCart />
                      </IconContext.Provider>
                    </div>
                  </Link>
                )}
                <div
                  className='btn-group me-3'
                  role='group'
                  aria-label='Button group with nested dropdown'
                >
                  <button type='button' className='btn btn-success'>
                    Account
                  </button>
                  <div className='btn-group' role='group'>
                    <button
                      id='btnGroupDrop'
                      type='button'
                      className='btn btn-success dropdown-toggle hide'
                      data-bs-toggle='dropdown'
                      aria-hidden='true'
                    ></button>
                    <div
                      className='dropdown-menu hide'
                      aria-labelledby='btnGroupDrop'
                      style={{
                        position: 'absolute',
                        inset: '0px auto auto 0px',
                        margin: '0px',
                        transform: 'translate(0px, 50px)',
                      }}
                      data-popper-placement='bottom-start'
                    >
                      <a className='dropdown-item' href='/profile'>
                        Profile
                      </a>
                      <a className='dropdown-item' href='/orders'>
                        My Orders
                      </a>
                      <div className='dropdown-divider'></div>
                      <a className='dropdown-item' href='/logout'>
                        Logout
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
