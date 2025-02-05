import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import {
  deleteProduct,
  getProduct,
  updateProduct,
} from '@/utilities/api/ProductAPIHandlers';

const EditProduct = () => {
  const productId = useParams().pid;

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [stock, setStock] = useState('');

  useEffect(() => {
    console.log('fetching product details for editing');

    const fetchProductDetails = async () => {
      const product = await getProduct(productId);
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
      setImageUrl(product.imageUrl);
      setStock(product.stock);
    };
    fetchProductDetails();
  }, []);

  const handleSave = async () => {
    console.log('saving product changes');

    const product = {
      id: productId,
      name,
      description,
      price,
      imageUrl,
      stock,
    };

    await updateProduct(product);
    navigate('/products');
  };

  const handleDelete = async () => {
    console.log('deleting product');
    await deleteProduct(productId);
    navigate('/products');
  };

  return (
    <>
      <Helmet>
        <title>Edit Product</title>
      </Helmet>
      <section className='container'>
        <div className='row py-lg-5'>
          <div className='col-lg-6 col-md-8 mx-auto'>
            <h1 className='text-center pb-3'>Edit Product</h1>
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
                      value={name}
                      onChange={(e) => setName(e.target.value)}
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
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
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
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
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
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
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
                      value={stock}
                      onChange={(e) => setStock(e.target.value)}
                      className='form-control-plaintext'
                    />
                  </div>
                </div>
              </fieldset>
              <div className='text-center'>
                <button
                  type='button'
                  className='btn btn-success me-2'
                  onClick={handleSave}
                >
                  Save Changes
                </button>
                <button
                  type='button'
                  className='btn btn-danger'
                  onClick={handleDelete}
                >
                  Delete Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditProduct;
