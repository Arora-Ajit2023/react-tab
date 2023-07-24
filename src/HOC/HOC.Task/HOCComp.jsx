import React, { useState } from 'react';
import Login from './Login';
import Home from './Home';

const HOCComp = (wrapper) => {
  return function CheckRoutes(props) {
    const [isLogin, setIslogin] = useState(false);
    {
      isLogin ? <Home /> : <Login />;
    }
    return <wrapper />;
  };
};

export default HOCComp;
