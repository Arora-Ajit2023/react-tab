import { Button } from '@mui/material';
import { useState } from 'react';
import CounterHOC from './CounterHOC';

const Counter = ({ toggle, handleToggle }) => {
  return (
    <div>
      <Button onClick={handleToggle}>{!toggle ? 'Show' : 'Hide'}</Button>
      <p>{toggle ? 'hidden' : 'Visible'}</p>
    </div>
  );
};

const HOCComp = CounterHOC(Counter);
export default HOCComp;
