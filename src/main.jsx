// @ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom/client';

import Products from './Add to cart using node js/Products';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cart from './Add to cart using node js/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import InputComp from './Components/Vishal_Task/Input';

const router = createBrowserRouter([
  {
    path: '/',
    element: <InputComp />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>
);
