/* eslint-disable no-prototype-builtins */
// @ts-nocheck
import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import Card from './Card';

const AddToCart = () => {
  const [products, setProducts] = useState([]);
  const [cartData, setCartData] = useState([]);
  // const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((data) => data.json())
      .then((data) => {
        const productsData = data.map((data) => ({
          ...data,
          isButtonDisabled: false,
        }));

        setProducts(productsData);
        console.log(productsData);
      });
  }, []);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (storedCartItems) {
      setCartData(storedCartItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartData));
  }, [cartData]);

  const AddToCart = (product) => {
    setCartData([...cartData, product]);
    product.isButtonDisabled = true;
  };

  return (
    <div>
      <p>Added Product : {cartData.length}</p>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <p>{product.title}</p>
            <button
              onClick={() => {
                AddToCart(product);
              }}
              disabled={product.isButtonDisabled}
            >
              {product.isButtonDisabled ? 'Added to cart ' : 'add to cart'}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default AddToCart;
