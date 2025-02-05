import { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AuthContext } from '@/contexts/AuthContext';

const ProductCard = ({ pid, imageUrl, name, price }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className='p-2'>
      <Link
        to={
          currentUser == null
            ? '/login'
            : currentUser.role == 'ADMIN'
              ? `/editProduct/${pid}`
              : `/product/${pid}`
        }
        className='text-decoration-none'
      >
        <div className='card mb-3'>
          <h3 className='card-header'>{name}</h3>
          <img
            src={imageUrl}
            alt='product'
            className='d-block user-select-none'
            width='100%'
            height='200'
          />
          <div className='card-body'>
            <div className='d-flex justify-content-between align-items-center'>
              {currentUser && (
                <button type='button' className='btn btn-primary'>
                  {currentUser.role == 'ADMIN' ? 'Edit' : 'View'}
                </button>
              )}
              <h4 className='text-primary me-2'>€{price}</h4>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

ProductCard.propTypes = {
  pid: PropTypes.number,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
};

export default ProductCard;
