/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const ProductItem = ({ product, linkToProduct }) => {
  const innerContent = (
    <div className='container'>
      <div className='row'>
        <div className='col-md-3'>
          <div className='container'>
            <div className='row py-lg-3'>
              <div className='mx-auto'>
                <img
                  src={product.imageUrl}
                  width={50}
                  height={60}
                  alt='Product'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-5'>
          <div className='container'>
            <div className='row py-lg-3'>
              <div className='mx-auto'>
                <div className='text-left'>
                  <h4>{product.name}</h4>
                </div>
                <div className='d-flex justify-content-start align-items-center'>
                  <span>Price: €{product.price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='container'>
            <div className='row py-lg-3'>
              <div className='mx-auto'>
                <div className='p-2'>
                  <p>Quantity: {product.quantity}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (linkToProduct) {
    return (
      <Link
        to={`/product/${product.productId}`}
        className='text-decoration-none'
      >
        {innerContent}
      </Link>
    );
  }
  return innerContent;
};

export default ProductItem;
