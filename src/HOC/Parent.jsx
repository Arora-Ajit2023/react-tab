import { useState } from 'react';
import HOC2 from './HOC2';

const Parent = () => {
  const [count, setCount] = useState(0);
  const IncrementHanler = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <button onClick={IncrementHanler}>Increment</button>
      <HOC2 loading={count % 5 === 0}>
        <p>{count}</p>
      </HOC2>
    </div>
  );
};

export default Parent;
