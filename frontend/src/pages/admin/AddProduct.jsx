/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { addProduct } from '@/utilities/api/ProductAPIHandlers';

const AddProduct = () => {
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const handleAddProduct = () => {
    console.log('adding product');

    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const imageUrl = document.getElementById('imageUrl').value;
    const stock = document.getElementById('stock').value;

    if (!name || !description || !price || !imageUrl || !stock) {
      setError('All fields are required');
      return;
    }

    console.log(name, description, price, imageUrl, stock);

    const addProductAsync = async (product) => {
      try {
        const res = await addProduct(product);
        console.log('Product added successfully', res);
        navigate('/products');
      } catch (error) {
        console.log('Error adding product', error);
        setError('Error adding product');
      }
    };

    const product = {
      name,
      description,
      price,
      imageUrl,
      stock,
    };

    addProductAsync(product);
  };

  return (
    <>
      <Helmet>
        <title>Add Product</title>
      </Helmet>
      <section className='container'>
        <div className='row py-lg-5'>
          <div className='col-lg-6 col-md-8 mx-auto'>
            <h1 className='text-center pb-3'>Add Product</h1>
            <form>
              <fieldset>
                <div className='row pb-2'>
                  <label htmlFor='name' className='col-sm-2 col-form-label'>
                    Name
                  </label>
                  <div className='col-sm-10 border border-secondary'>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      className='form-control-plaintext'
                    />
                  </div>
                </div>
                <div className='row pb-2'>
                  <label
                    htmlFor='description'
                    className='col-sm-2 col-form-label'
                  >
                    Description
                  </label>
                  <div className='col-sm-10 border border-secondary'>
                    <textarea
                      type='text'
                      rows={4}
                      id='description'
                      name='description'
                      className='form-control-plaintext'
                    />
                  </div>
                </div>
                <div className='row pb-2'>
                  <label htmlFor='price' className='col-sm-2 col-form-label'>
                    Price
                  </label>
                  <div className='col-sm-10 border border-secondary'>
                    <input
                      type='price'
                      id='price'
                      name='price'
                      className='form-control-plaintext'
                    />
                  </div>
                </div>
                <div className='row pb-2'>
                  <label htmlFor='imageUrl' className='col-sm-2 col-form-label'>
                    Image URL
                  </label>
                  <div className='col-sm-10 border border-secondary'>
                    <input
                      type='text'
                      id='imageUrl'
                      name='imageUrl'
                      className='form-control-plaintext'
                    />
                  </div>
                </div>
                <div className='row pb-3'>
                  <label htmlFor='stock' className='col-sm-2 col-form-label'>
                    Stock
                  </label>
                  <div className='col-sm-10 border border-secondary'>
                    <input
                      type='stock'
                      id='stock'
                      name='stock'
                      className='form-control-plaintext'
                    />
                  </div>
                </div>
              </fieldset>
              <div className='text-center'>
                <button
                  type='button'
                  className='btn btn-success me-2'
                  onClick={handleAddProduct}
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddProduct;
