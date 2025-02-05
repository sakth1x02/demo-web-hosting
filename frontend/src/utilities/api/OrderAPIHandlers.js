import axios from 'axios';
import { API_BASE_URL } from './constants';
import { getRequestHeaders } from '../AuthUtilities';

// Order Handlers
export const createOrder = async (orderInfo) => {
  try {
    const response = await axios.post(
      API_BASE_URL + '/order',
      orderInfo,
      getRequestHeaders()
    );
    return response.data;
  } catch (error) {
    console.log('Error during API call', error);
    throw error;
  }
};

export const getAllOrders = async () => {
  try {
    const response = await axios.get(
      API_BASE_URL + '/orders',
      getRequestHeaders()
    );
    return response.data;
  } catch (error) {
    console.log('Error during API call', error);
    throw error;
  }
};

export const getOrder = async (orderId) => {
  try {
    const response = await axios.get(
      API_BASE_URL + '/order/' + orderId,
      getRequestHeaders()
    );
    return response.data;
  } catch (error) {
    console.log('Error during API call', error);
    throw error;
  }
};
