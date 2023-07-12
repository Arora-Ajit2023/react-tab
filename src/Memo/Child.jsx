/* eslint-disable react-refresh/only-export-components */
import React, { memo } from 'react';

const Child = ({ count = 999 }) => {
  console.log('This is child comp');
  return (
    <div>
      <h1>This is child comp:{count}</h1>
    </div>
  );
};
const MemoComp = memo(Child);
export default MemoComp;
