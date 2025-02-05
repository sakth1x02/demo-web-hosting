const localStorageUserItemName = 'ecommerce-user';

// Function to save user details in local storage
export const saveUserDetails = (user) => {
  localStorage.setItem(localStorageUserItemName, JSON.stringify(user));
};

// Function to get user details from local storage
export const getUserDetails = () => {
  return JSON.parse(localStorage.getItem(localStorageUserItemName));
};

// Function to remove user details from local storage
export const removeUserDetails = () => {
  localStorage.removeItem(localStorageUserItemName);
};

// Function to get headers for API calls
export const getRequestHeaders = () => {
  const headers = {
    'Content-Type': 'application/json',
  };
  if (getUserDetails()?.token && getUserDetails().token !== '')
    headers['Authorization'] = 'Bearer ' + getUserDetails().token;
  return { headers };
};
