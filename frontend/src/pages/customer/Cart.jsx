import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { clearCart, getCart } from '@/utilities/api/CartAPIHandlers';
import CartProductItem from '@/components/CartProductItem';

const Cart = () => {
  const [cart, setCart] = useState(null);
  const [change, setChange] = useState(false);

  const updateCart = () => {
    setChange(!change);
  };

  useEffect(() => {
    console.log('fetching cart details');

    const fetchCartDetails = async () => {
      // fetch cart details
      try {
        const res = await getCart();
        setCart(res);
      } catch (error) {
        console.log('User has no cart');
      }
    };
    fetchCartDetails();
  }, [change]);

  const emptyCart = async () => {
    try {
      await clearCart();
      updateCart();
    } catch (error) {
      console.log('Error clearing cart');
    }
  };

  return (
    <>
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <section className='container'>
        <div className='row py-lg-5'>
          <div className='mx-auto'>
            <h1 className='text-center pb-3 pt-md-0 pt-sm-5'>Cart</h1>
            <div className='container'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='container'>
                    <div className='row py-lg-3'>
                      <div className='mx-auto'>
                        <div className='card mb-3'>
                          <div className='card-body'>
                            <div className='card-text'>
                              {!(
                                cart &&
                                cart.cartProducts &&
                                cart.cartProducts.length
                              ) && <p>Your cart is empty</p>}
                              {cart?.cartProducts &&
                                cart.cartProducts.map((item, index) => (
                                  <CartProductItem
                                    key={index}
                                    cartProduct={item}
                                    updateCart={updateCart}
                                  />
                                ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <section className='container'>
                    <div className='row py-lg-3'>
                      <div className='col-lg-7 col-md-8 mx-auto'>
                        <div className='card mb-3'>
                          <h3 className='card-header'>Total</h3>
                          <div className='card-body'>
                            {cart?.cartProducts &&
                              cart.cartProducts.map((item, index) => (
                                <span key={index}>
                                  <div className='d-flex justify-content-between align-items-center'>
                                    <p>{item.name}</p>
                                    <p>€{item.price * item.quantity}</p>
                                  </div>
                                </span>
                              ))}
                          </div>
                          <div className='card-body'>
                            <div className='d-flex justify-content-between align-items-center'>
                              <h4>Cart Total</h4>
                              <h4>€{cart?.total || 0}</h4>
                            </div>
                          </div>
                          <div className='card-body'>
                            <div className='text-center'>
                              <Link to={'/checkout'}>
                                <button
                                  type='button'
                                  className='btn btn-success cart-custom'
                                  disabled={
                                    !(
                                      cart &&
                                      cart.cartProducts &&
                                      cart.cartProducts.length
                                    )
                                  }
                                >
                                  Checkout
                                </button>
                              </Link>
                            </div>

                            <div className='text-center pt-2'>
                              <button
                                type='button'
                                className='btn btn-danger cart-custom'
                                onClick={emptyCart}
                                disabled={
                                  !(
                                    cart &&
                                    cart.cartProducts &&
                                    cart.cartProducts.length
                                  )
                                }
                              >
                                Clear Cart
                              </button>
                            </div>
                          </div>
                        </div>
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

export default Cart;
