import { useEffect, useMemo, useState } from 'react';

export const LoopBad = () => {
  const [counter, setCounter] = useState(0);
  let sum = 0;
  for (let i = 1; i < 5; i++) {
    console.log('I: ', i);
    sum += i;
  }

  return (
    <div>
      <p>Sum : {sum}</p>
      <p>Counter : {counter}</p>

      <button onClick={() => setCounter((val) => val + 1)}>Increment</button>
    </div>
  );
};
