import axios from 'axios';
import { API_BASE_URL } from './constants';
import { getRequestHeaders } from '../AuthUtilities';

// Cart Handlers
export const addToCart = async (productId) => {
  try {
    const response = await axios.post(
      API_BASE_URL + '/cart/' + productId,
      {},
      getRequestHeaders()
    );
    return response.data;
  } catch (error) {
    console.log('Error during API call', error);
    throw error;
  }
};

export const getCart = async () => {
  try {
    const response = await axios.get(
      API_BASE_URL + '/cart',
      getRequestHeaders()
    );
    return response.data;
  } catch (error) {
    console.log('Error during API call', error);
    throw error;
  }
};

export const updateProductQuantityInCart = async (productInfo) => {
  try {
    const response = await axios.put(
      API_BASE_URL + '/cart',
      productInfo,
      getRequestHeaders()
    );
    return response.data;
  } catch (error) {
    console.log('Error during API call', error);
    throw error;
  }
};

export const removeFromCart = async (productId) => {
  try {
    const response = await axios.delete(
      API_BASE_URL + '/cart/' + productId,
      getRequestHeaders()
    );
    return response.data;
  } catch (error) {
    console.log('Error during API call', error);
    throw error;
  }
};

export const clearCart = async () => {
  try {
    const response = await axios.delete(
      API_BASE_URL + '/cart',
      getRequestHeaders()
    );
    return response.data;
  } catch (error) {
    console.log('Error during API call', error);
    throw error;
  }
};
