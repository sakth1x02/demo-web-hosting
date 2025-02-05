import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { getOrder } from '@/utilities/api/OrderAPIHandlers';
import ProductItem from '@/components/ProductItem';

const Order = () => {
  const [order, setOrder] = useState({});

  const { oid } = useParams();

  useEffect(() => {
    // Fetch order details from server
    const fetchOrder = async () => {
      try {
        const res = await getOrder(oid);
        res.date = new Date(res.date).toLocaleDateString('en-GB', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
        setOrder(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOrder();
  }, []);

  return (
    <>
      <Helmet>
        <title>Order</title>
      </Helmet>
      <section className='container'>
        <div className='row py-lg-5'>
          <div className='mx-auto'>
            <h1 className='text-center pb-3 pt-md-0 pt-sm-5'>
              Order #{order.id}
            </h1>
            <h5 className='text-center pb-3 pt-md-0 pt-sm-5'>
              Order Date: {order.date}
            </h5>
            <div className='container'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='container'>
                    <div className='row py-lg-3'>
                      <div className='mx-auto'>
                        <h3 className='text-center pb-3'>Order Items</h3>
                        <div className='card mb-3'>
                          <div className='card-body'>
                            <div className='card-text'>
                              {order?.orderProducts &&
                                order.orderProducts.map((item, index) => (
                                  <ProductItem
                                    key={index}
                                    product={item}
                                    linkToProduct={true}
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
                            <div className='pt-3'>
                              <div className='d-flex justify-content-between align-items-center'>
                                <h5>Order Total</h5>
                                <h5>€{order.total}</h5>
                              </div>
                            </div>
                          </div>
                          <hr />
                          <div className='card-body'>
                            <h5>Shipping Address</h5>
                            <p>{order.address}</p>
                          </div>
                          <hr />
                          <div className='card-body'>
                            <h5>Payment Method</h5>
                            <p>{order.paymentMethod}</p>
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

export default Order;
