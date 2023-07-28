import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from './context';

const Products = () => {
  const { productData, setProductData } = useContext(ProductContext);

  useEffect(() => {
    if (productData.length === 0) {
      axios('https://fakestoreapi.com/products').then((response) => {
        if (response.data) {
          setProductData(response.data);
        }
      });
    }
  }, [productData, setProductData]);

  return (
    <div>
      <div>
        <h1>My Products</h1>
        <ul style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {productData.map((item) => {
            return (
              <li
                key={item.id}
                style={{
                  padding: 12,
                  border: '1px solid silver',
                  width: '180px',
                  listStyleType: 'none',
                }}
              >
                <Link to={`/product/${item.id}`}>
                  <p>{item.title}</p>
                  <p>{item.price}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Products;
