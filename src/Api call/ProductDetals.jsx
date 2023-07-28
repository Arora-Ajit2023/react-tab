import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${id}`).then((result) => {
      if (result.data) {
        setProductDetails(result.data);
      }
    });
  }, [id]);

  if (!productDetails.id) {
    return <p>Please Wait,Data is Loading!</p>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <p>{productDetails.title}</p>
    </div>
  );
};

export default ProductDetails;
