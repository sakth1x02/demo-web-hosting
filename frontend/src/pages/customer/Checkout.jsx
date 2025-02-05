import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { createOrder } from '@/utilities/api/OrderAPIHandlers';
import { clearCart, getCart } from '@/utilities/api/CartAPIHandlers';
import ProductItem from '@/components/ProductItem';

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);
  const [change, setChange] = useState(false);

  const updateCart = () => {
    setChange(!change);
  };

  const navigate = useNavigate();

  useEffect(() => {
    console.log('fetching cart details');

    const fetchCartDetails = async () => {
      // fetch cart details
      try {
        const res = await getCart();
        setCart(res);

        if (!res.cartProducts || res.cartProducts.length === 0) {
          navigate('/');
        }
      } catch (error) {
        console.log('User has no cart');
      }
    };
    fetchCartDetails();
  }, []);

  // Place order
  const handlePlaceOrder = async () => {
    console.log('place order clicked');

    const address = document.getElementById('checkout-address').value;
    const paymentMethod = document.querySelector(
      'input[name="payment-method"]:checked'
    ).value;
    const orderInfo = { address, paymentMethod };

    if (!address) {
      setError('Please enter your address');
      return;
    }

    console.log(orderInfo);
    try {
      // create order
      const order = await createOrder(orderInfo);
      console.log('order created: ', order);

      // clear cart
      await clearCart();
      updateCart();

      // navigate to the orders list
      navigate('/order/' + order.id);
    } catch (error) {
      console.log('Error creating order', error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Checkout</title>
      </Helmet>
      <section className='container'>
        <div className='row py-lg-5'>
          <div className='mx-auto'>
            <h1 className='text-center pb-3 pt-md-0 pt-sm-5'>Checkout</h1>
            <div className='container'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='container'>
                    <div className='row py-lg-3'>
                      <div className='mx-auto'>
                        <div className='card mb-3'>
                          <div className='card-body'>
                            <div className='card-text'>
                              {(!cart ||
                                !cart.cartProducts ||
                                cart.cartProducts.length === 0) && (
                                <p>Your cart is empty</p>
                              )}
                              {cart?.cartProducts &&
                                cart.cartProducts.map((item, index) => (
                                  <ProductItem key={index} product={item} />
                                ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-md-5'>
                  <section className='container'>
                    <div className='row py-lg-3'>
                      <div className='col-lg-7 col-md-8 mx-auto'>
                        <div className='card mb-3'>
                          <h3 className='card-header'>Total</h3>
                          <div className='card-body'>
                            <div className='pt-3'>
                              <div className='d-flex justify-content-between align-items-center'>
                                <h5>Cart Total</h5>
                                <h5>€{cart?.total || 0}</h5>
                              </div>
                            </div>
                          </div>
                          <hr />
                          <div className='card-body'>
                            <h5>Shipping Address</h5>
                            <textarea
                              id='checkout-address'
                              className='form-control border border-secondary'
                              rows='3'
                              placeholder='Enter your address'
                            ></textarea>
                          </div>
                          <hr />
                          <div className='card-body'>
                            <h5>Payment Method</h5>
                            <form>
                              <fieldset>
                                <div className='form-check'>
                                  <input
                                    type='radio'
                                    name='payment-method'
                                    value='Credit/Debit Card'
                                    id='card-payment-mode'
                                    disabled
                                  />
                                  <label
                                    className='form-check-label ms-2'
                                    htmlFor='card-payment-method'
                                  >
                                    Credit/Debit Card
                                  </label>
                                </div>
                                <div className='form-check'>
                                  <input
                                    type='radio'
                                    name='payment-method'
                                    value='COD'
                                    id='COD-payment-mode'
                                    checked
                                    readOnly
                                  />
                                  <label
                                    className='form-check-label ms-2'
                                    htmlFor='COD-payment-method'
                                  >
                                    Cash on Delivery (COD)
                                  </label>
                                </div>
                              </fieldset>
                            </form>
                          </div>
                          <hr />
                          <div className='card-body'>
                            <div className='text-center'>
                              <button
                                type='button'
                                className='btn btn-success'
                                onClick={handlePlaceOrder}
                                disabled={
                                  !(
                                    cart &&
                                    cart.cartProducts &&
                                    cart.cartProducts.length
                                  )
                                }
                              >
                                Place Order
                              </button>
                            </div>
                            <p className='text-danger text-center'>{error}</p>
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

export default Checkout;
