import React from 'react';
import { ProfileProvider } from './Context';
import Child from './Child';

const Parent = () => {
  return (
    <ProfileProvider value={{ name: 'Ajit', city: 'Mumbai' }}>
      <h1>This is Parent</h1>
      <Child />
    </ProfileProvider>
  );
};

export default Parent;
