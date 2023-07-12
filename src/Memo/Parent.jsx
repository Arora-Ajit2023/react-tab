import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
  const [count, setCount] = useState(0);
  console.log('This is Parent comp');
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((value) => value + 1)}>+</button>
      <button onClick={() => setCount((value) => value - 1)}>-</button>
      <Child count={count} />
      <Child count={10} />
      <Child />
      <Child />
      <Child />
      <Child />
    </div>
  );
};

export default Parent;
