import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios('https://fakestoreapi.com/products').then((response) => {
      if (response.data) {
        setProducts(response.data);
      }
    });
  }, []);
  if (!products) {
    return <p>Please Wait,Data is Loading!</p>;
  }
  return (
    <div>
      <div>
        <h1>My Products</h1>
        <ul style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {products.map((item) => {
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
