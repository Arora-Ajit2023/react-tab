// @ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom/client';

import Products from './Add to cart using node js/Products';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cart from './Add to cart using node js/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Parent from './Memo/Parent';
import TeaSet from './Memo/Child';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Products />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* <ToastContainer />
    <RouterProvider router={router} /> */}
    {/* <Parent /> */}
  </>
);
