import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { getProductsBySearch } from '@/utilities/api/ProductAPIHandlers';
import ProductCard from '@/components/ProductCard';

const SearchListing = () => {
  const { searchString } = useParams();

  const [searchResultProducts, setSearchResultProducts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchAllProducts = async () => {
      const response = await getProductsBySearch(searchString);
      setSearchResultProducts(response);
      console.log(response);
    };
    fetchAllProducts();
  }, [searchString]);

  return (
    <>
      <Helmet>
        <title>Search</title>
      </Helmet>
      <section className='text-center container'>
        <div className='row py-lg-5'>
          <div className='col-lg-6 col-md-8 mx-auto'>
            <h1>
              {searchResultProducts?.length === 0
                ? "No products found for '"
                : "Products for '"}
              {searchString.replace('+', ' ')}
            </h1>
          </div>
        </div>
      </section>
      <div className='container'>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
          {searchResultProducts.map((product, index) => (
            <ProductCard
              imageUrl={product.imageUrl}
              key={index}
              pid={product.id}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchListing;
