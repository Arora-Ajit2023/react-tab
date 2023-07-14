import { useEffect, useMemo, useState } from 'react';

export const LoopsGood = () => {
  const [counter, setCounter] = useState(0);

  const result = useMemo(() => {
    let sum = 0;
    for (let i = 1; i < 5; i++) {
      console.log('I: ', i);
      sum += i;
    }
    return sum;
  }, []);

  console.log('Re-render: ', result);

  return (
    <div>
      <p>Sum : {result}</p>
      <p>Counter : {counter}</p>

      <button onClick={() => setCounter((val) => val + 1)}>Increment</button>
    </div>
  );
};
