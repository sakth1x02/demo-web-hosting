/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const OrdersOrderItem = ({ order }) => {
  const [orderDate, setOrderDate] = useState('');
  useEffect(() => {
    setOrderDate(
      new Date(order.date).toLocaleDateString('en-GB', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    );
  }, []);

  return (
    <Link to={'/order/' + order.id} className='text-decoration-none'>
      <div className='card mb-3'>
        <h3 className='card-header'>Order #{order.id}</h3>
        <div className='card-body'>
          <div className='d-flex justify-content-between align-items-center'>
            <p>Order Date</p>
            <p>{orderDate}</p>
          </div>
        </div>

        <div className='card-body'>
          <div className='d-flex justify-content-between align-items-center'>
            <div>
              <h4>Items</h4>
              <ul>
                {order?.orderProducts &&
                  order.orderProducts.map((item, index) => (
                    <li key={index}>{item.name}</li>
                  ))}
              </ul>
            </div>

            <div>
              <h4>Shipping Address</h4>
              <p>{order.address}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default OrdersOrderItem;
