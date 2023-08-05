import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from './Api call/Products';

import MainPage from './Checkbox task/MainPage';
import ProductDetail from './Checkbox task/ProductDetail';
import Input from './InputTask/Input';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Input />,
  },
  {
    path: '/product/:id',
    element: <ProductDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>
);
