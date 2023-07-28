import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then((result) => {
        if (result.data) {
          setProducts(result.data.products);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(products);
  return (
    <>
      <h1>Product List</h1>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          rowGap: '1rem',
        }}
      >
        {products.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                width: 220,
                border: '1px solid silver',
                textAlign: 'center',
              }}
              onClick={() => {
                navigate(`/product/${item.id}`);
              }}
            >
              <p>{item.title}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
