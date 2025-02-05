import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { getProduct } from '@/utilities/api/ProductAPIHandlers';
import { getCart, addToCart } from '@/utilities/api/CartAPIHandlers';

const ProductDetails = () => {
  const { pid } = useParams();
  const [cartProductIds, setCartProductIds] = useState([]);

  const [product, setProduct] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch product from server
    const fetchProduct = async () => {
      try {
        // Fetch product from server
        const res = await getProduct(pid);
        setProduct(res);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();

    const fetchCart = async () => {
      try {
        // Fetch cart from server
        const res = await getCart();
        setCartProductIds(
          res.cartProducts.map((cartProduct) => cartProduct.productId)
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchCart();
  }, [pid]);

  const addProductToCart = async () => {
    try {
      // Fetch product from server
      await addToCart(pid);
      navigate('/cart');
    } catch (error) {
      console.log(error);
    }
  };

  const goToCart = () => {
    navigate('/cart');
  };

  return (
    <>
      <Helmet>
        <title>Product Details</title>
      </Helmet>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <section className='container'>
              <div className='row py-lg-3'>
                <div className='pt-5 mx-auto d-flex justify-content-center'>
                  <img src={product?.imageUrl} alt='product_image' />
                </div>
              </div>
            </section>
          </div>
          <div className='col-md-6'>
            <section className='container'>
              <div className='row py-lg-3'>
                <div className='pt-5 mx-auto d-flex justify-content-center'>
                  <div className='card mb-3'>
                    <h3 className='card-header'>{product?.name}</h3>
                    <div className='card-body'>
                      <p className='card-text'>{product?.description}</p>
                    </div>
                    <div className='card-body'>
                      <div className='d-flex justify-content-between align-items-center'>
                        {product &&
                          (cartProductIds.includes(product.id) ? (
                            <button
                              type='button'
                              className='btn btn-primary'
                              onClick={goToCart}
                            >
                              Go to Cart
                            </button>
                          ) : (
                            <button
                              type='button'
                              className='btn btn-primary'
                              onClick={addProductToCart}
                              disabled={product?.stock == 0}
                            >
                              {product?.stock == 0
                                ? 'Out of Stock'
                                : 'Add to Cart'}
                            </button>
                          ))}
                        <h4 className='text-primary me-2'>€{product?.price}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
