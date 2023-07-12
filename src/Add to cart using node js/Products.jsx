import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Product from './Product';
import { Alert, Box, Button, CircularProgress, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const getProducts = async () => {
    const productData = await axios('http://localhost:3000/products');
    if (productData.data) {
      setIsLoading(true);
      // <Alert severity='success'>This is a success alert — check it out!</Alert>;
    }
    setProducts(productData.data);
  };
  console.log(products);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {!isLoading ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Container sx={{ position: 'relative' }}>
          <Box sx={{ position: 'sticky', top: '0px' }}>
            <Button
              sx={{ marginBottom: '1rem' }}
              onClick={() => {
                navigate('/cart');
              }}
              variant='contained'
            >
              Go to Cart
            </Button>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            {products.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </Box>
        </Container>
      )}
    </>
  );
};

export default Products;
