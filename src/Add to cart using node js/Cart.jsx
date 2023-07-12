import { Box, Button, Card, Container, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getCartData = async () => {
      try {
        const Cart_data = await axios('http://localhost:3000/cart');
        setCart(Cart_data.data);
        console.log('Product added');
      } catch (error) {
        console.error(error);
      }
    };
    getCartData();
  }, []);

  const deleteProduct = async (id) => {
    const newCartData = await axios.delete(`http://localhost:3000/cart/${id}`);
    setCart((prvData) => {
      return prvData.filter((item) => item.id !== id);
    });
    toast.success('Product removed from the cart!', {
      position: 'top-right',
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  };
  console.log(cart);
  return (
    <Container>
      {cart.length === 0 && <p>No Product</p>}
      {cart.map((cartData) => {
        return (
          <Card
            key={cartData.id}
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginBottom: '1rem',
              padding: '1.5rem',
            }}
          >
            <Box sx={{ width: '120px', height: '120px' }}>
              <img src={cartData.image} alt='product Image' height='100%' />
            </Box>
            <Box>
              <Typography variant='h5'>{cartData.title}</Typography>
            </Box>
            <Button
              variant='contained'
              size='small'
              onClick={() => {
                deleteProduct(cartData.id);
              }}
            >
              Delete
            </Button>
          </Card>
        );
      })}
    </Container>
  );
};

export default Cart;
