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
import { LoopBad } from './UseMemo/LoopBad';
import { LoopsGood } from './UseMemo/LoopGood';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoopsGood />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>
);
