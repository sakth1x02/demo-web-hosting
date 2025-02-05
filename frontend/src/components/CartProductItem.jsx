/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMinus } from 'react-icons/fa6';
import { FaPlus, FaTrashAlt } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import {
  removeFromCart,
  updateProductQuantityInCart,
} from '@/utilities/api/CartAPIHandlers';
import { getProduct } from '@/utilities/api/ProductAPIHandlers';

const CartProductItem = ({ cartProduct, updateCart }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await getProduct(cartProduct.productId);
      setProduct(res);
    };
    fetchProduct();
  }, []);

  const increaseQuantity = async () => {
    console.log('increasing quantity');
    try {
      await updateProductQuantityInCart({
        productId: cartProduct.productId,
        quantity: cartProduct.quantity + 1,
      });
      updateCart();
    } catch (error) {
      console.log(error);
    }
  };

  const decreaseQuantity = async () => {
    console.log('decreasing quantity');
    try {
      await updateProductQuantityInCart({
        productId: cartProduct.productId,
        quantity: cartProduct.quantity - 1,
      });
      updateCart();
    } catch (error) {
      console.log(error);
    }
  };

  const removeProduct = async () => {
    console.log('removing product');
    try {
      await removeFromCart(cartProduct.productId);
      updateCart();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-2'>
          <div className='container'>
            <div className='row py-lg-3'>
              <div className='mx-auto'>
                <img
                  src={cartProduct?.imageUrl}
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
                  <Link
                    to={`/product/${cartProduct.productId}`}
                    className='text-decoration-none'
                  >
                    <h4>{cartProduct?.name}</h4>
                  </Link>
                </div>
                <div className='d-flex justify-content-start align-items-center'>
                  <span>Price: €{cartProduct?.price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-5'>
          <div className='container'>
            <div className='row py-lg-3'>
              <div className='mx-auto'>
                <div className='d-flex flex-row'>
                  <div className='p-2'>
                    <div
                      className='badge rounded-pill bg-warning p-2'
                      onClick={decreaseQuantity}
                    >
                      <IconContext.Provider
                        value={{
                          color: 'white',
                          size: '15px',
                        }}
                      >
                        <FaMinus />
                      </IconContext.Provider>
                    </div>
                  </div>
                  <div className='p-2'>
                    <p>{cartProduct?.quantity}</p>
                  </div>
                  <div className='p-2'>
                    <div
                      className='badge rounded-pill bg-success p-2'
                      onClick={increaseQuantity}
                      disabled={product.stock == cartProduct.quantity}
                    >
                      <IconContext.Provider
                        value={{
                          color: 'white',
                          size: '15px',
                        }}
                      >
                        <FaPlus />
                      </IconContext.Provider>
                    </div>
                  </div>
                  <div className='p-2 ms-4'>
                    <div
                      className='badge rounded-pill bg-danger p-2'
                      onClick={removeProduct}
                    >
                      <IconContext.Provider
                        value={{
                          color: 'white',
                          size: '15px',
                        }}
                      >
                        <FaTrashAlt />
                      </IconContext.Provider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProductItem;
