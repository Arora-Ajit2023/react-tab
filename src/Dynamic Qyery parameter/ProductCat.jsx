import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCat = () => {
  const [cats, setCats] = useState([]);
  const [checkBoxValue, setCheckBoxValue] = useState('');

  useEffect(() => {
    axios('https://dummyjson.com/products/categories')
      .then((result) => {
        if (result.data) {
          setCats(result.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Select Category</h1>
      <button>
        <Link
          style={{
            textDecoration: 'none',
            color: 'black',
            marginLeft: '0.5rem',
          }}
        >
          Go T products
        </Link>
      </button>
      {cats.map((cat) => {
        return (
          <div key={cat}>
            <label>
              <input
                type='checkbox'
                value={cat}
                onClick={(e) => {
                  setCheckBoxValue(e.target.value);
                }}
              />

              {cat}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCat;
