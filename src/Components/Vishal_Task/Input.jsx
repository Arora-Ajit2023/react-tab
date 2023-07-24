import React, { useState } from 'react';
import ChildComp from './ChildComp';
import { Input } from '@mui/material';

const InputComp = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <Input type='text' onChange={(e) => setValue(e.target.value)} />
      <ChildComp value={value} />
    </div>
  );
};

export default InputComp;
