import React, { useState } from 'react';
import { useEffect } from 'react';

const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('Run 1st time');
  }, []);

  useEffect(() => {
    console.log('run only when count in change');
  }, [count]);
  return (
    <div>
      <p>UseEffect hook</p>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment count
      </button>
    </div>
  );
};
export default UseEffectHook;
