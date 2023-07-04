import React, { useState } from 'react';

const ProductList = ({ products }) => {
  const [isAdded, setIsAdded] = useState(false);
  return (
    <div style={{ width: '70%' }}>
      <ul style={{ listStyle: 'none' }}>
        {products.map((product) => {
          return (
            <li key={product.id} style={{ marginBottom: '1rem' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <p>{product.title}</p>
                <button>Add to cart</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
