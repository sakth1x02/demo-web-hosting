import axios from 'axios';
import { API_BASE_URL } from './constants';
import { getRequestHeaders } from '../AuthUtilities';

// Product Handlers
export const addProduct = async (product) => {
  try {
    const response = await axios.post(
      API_BASE_URL + '/products',
      product,
      getRequestHeaders()
    );
    return response.data;
  } catch (error) {
    console.log('Error during API call', error);
    throw error;
  }
};

export const getAllProducts = async () => {
  try {
    const response = await axios.get(
      API_BASE_URL + '/products',
      getRequestHeaders()
    );
    return response.data;
  } catch (error) {
    console.log('Error during API call', error);
    throw error;
  }
};

export const getProduct = async (productId) => {
  try {
    const response = await axios.get(
      API_BASE_URL + '/product/' + productId,
      getRequestHeaders()
    );
    return response.data;
  } catch (error) {
    console.log('Error during API call', error);
    throw error;
  }
};

export const getProductsBySearch = async (searchString) => {
  try {
    const response = await axios.get(
      API_BASE_URL + '/products/search/' + searchString,
      getRequestHeaders()
    );
    return response.data;
  } catch (error) {
    console.log('Error during API call', error);
    throw error;
  }
};

export const updateProduct = async (product) => {
  try {
    const response = await axios.put(
      API_BASE_URL + '/product',
      product,
      getRequestHeaders()
    );
    return response.data;
  } catch (error) {
    console.log('Error during API call', error);
    throw error;
  }
};

export const deleteProduct = async (productId) => {
  try {
    const response = await axios.delete(
      API_BASE_URL + '/product/' + productId,
      getRequestHeaders()
    );
    return response.data;
  } catch (error) {
    console.log('Error during API call', error);
    throw error;
  }
};
