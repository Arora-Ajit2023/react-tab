import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const [productDetail, setProductDetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios(`https://dummyjson.com/products/${id}`).then((result) => {
      if (result.data) {
        setProductDetail(result.data);
        console.log(result.data);
      }
    });
  }, [id]);

  if (!productDetail.id) {
    return <p>Please Wait,Data is Loading!</p>;
  }

  return <div>{productDetail.description}</div>;
};

export default Product;
