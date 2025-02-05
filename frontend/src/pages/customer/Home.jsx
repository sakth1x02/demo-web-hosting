import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { getAllProducts } from '@/utilities/api/ProductAPIHandlers';
import ProductCard from '@/components/ProductCard';
import Spinner from '@/components/Spinner';
const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchAllProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await getAllProducts();
        setProducts(response);
      } catch (err) {
        setError(err.message || 'Failed to fetch products');
        console.error('Failed to fetch products:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchAllProducts();
  }, []);
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <section className='text-center container'>
        <div className='row py-lg-5'>
          <div className='col-lg-6 col-md-8 mx-auto'>
            <h1>Products</h1>
          </div>
        </div>
      </section>
      <div className='container'>
        {loading && (
          <div className='text-center p-5'>
            <Spinner />
          </div>
        )}

        {error && (
          <div className='alert alert-danger text-center' role='alert'>
            {error}
          </div>
        )}

        {!loading && !error && products.length === 0 && (
          <div className='alert alert-info text-center' role='alert'>
            No products available at the moment.
          </div>
        )}

        {!loading && !error && products.length > 0 && (
          <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
            {products.map((product, index) => (
              <ProductCard
                imageUrl={product.imageUrl}
                key={index}
                pid={product.id}
                name={product.name}
                price={product.price}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
