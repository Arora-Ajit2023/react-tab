/* eslint-disable no-prototype-builtins */
/* eslint-disable no-undef */
import styled from '@emotion/styled';
import {
  Alert,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ProductBox = styled(Box)(({ theme }) => ({
  width: '250px',
  marginBottom: '1rem',
}));

const Product = ({ product }) => {
  const [cartMapping, setCartMapping] = useState({});

  const addToCart = async (productId) => {
    if (!cartMapping.hasOwnProperty(productId.toString())) {
      try {
        const cartData = await axios.post('http://localhost:3000/cart', {
          productId,
        });

        //can we use material component here!

        // if (cartData.data) {
        //   <Alert severity='success'>
        //     This is a success alert — check it out!
        //   </Alert>;
        // }

        toast.success('Product added to the cart successful!', {
          position: 'top-right',
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });

        console.log(cartData.data);
      } catch (error) {
        console.error(error);
      }
    } else {
      setCartMapping((prvData) => ({ ...prvData, productId: true }));
    }
    console.log(cartMapping);
  };
  return (
    <ProductBox>
      <Card
        sx={{ border: '1px solid silver', boxShadow: '0 0 2px 2px silver' }}
      >
        <CardMedia
          component='img'
          height='190'
          width='250'
          sx={{ objectFit: 'contain' }}
          image={product.image}
          title='product image'
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='h6'
            component='div'
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: '1',
              WebkitBoxOrient: 'vertical',
            }}
          >
            {product.title}
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: '2',
              WebkitBoxOrient: 'vertical',
            }}
          >
            {product.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size='small'
            variant='contained'
            sx={{ width: '100%' }}
            color='info'
            onClick={() => {
              addToCart(product.id);
            }}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </ProductBox>
  );
};

export default Product;
