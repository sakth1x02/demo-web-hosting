import axios from 'axios';
import { API_BASE_URL } from './constants';
import { getRequestHeaders } from '../AuthUtilities';

// User Handlers
export const getUser = async () => {
  try {
    const response = await axios.get(
      API_BASE_URL + '/user',
      getRequestHeaders()
    );
    return response.data;
  } catch (error) {
    console.log('Error during API call', error);
    throw error;
  }
};

export const updateUser = async (user) => {
  try {
    const response = await axios.put(
      API_BASE_URL + '/user',
      user,
      getRequestHeaders()
    );
    return response.data;
  } catch (error) {
    console.log('Error during API call', error);
    throw error;
  }
};

export const deleteUser = async () => {
  try {
    console.log('deleting user with token', getRequestHeaders());
    const response = await axios.delete(
      API_BASE_URL + '/user',
      getRequestHeaders()
    );
    return response.data;
  } catch (error) {
    console.log('Error during API call', error);
    throw error;
  }
};
