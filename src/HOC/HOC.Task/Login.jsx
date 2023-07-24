import { Button, Input } from '@mui/material';
import React from 'react';

const Login = () => {
  return (
    <wrapper>
      <label>
        Username:
        <Input type='text' placeholder='Enter Name!' />
      </label>
      <label>
        Password:
        <Input type='text' placeholder='Enter Password!' />
      </label>
      <Button>Submit</Button>
    </wrapper>
  );
};

export default Login;
