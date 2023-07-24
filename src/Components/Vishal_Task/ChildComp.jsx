import { Input } from '@mui/material';
import { useEffect, useState } from 'react';

const ChildComp = ({ value }) => {
  const [values, setValues] = useState([]);

  const handleValueChange = (e, index) => {
    const newValues = [...values];
    newValues[index] = parseInt(e.target.value, 10);
    setValues(newValues);
  };
  const renderInputs = () => {
    const inputs = [];
    for (let i = 0; i < value; i++) {
      inputs.push(
        <input
          key={i}
          type='number'
          value={values[i]}
          onChange={(e) => handleValueChange(e, i)}
        />
      );
    }
    return inputs;
  };
  const sum = values.reduce((acc, curr) => acc + (curr || 0), 0);

  return (
    <div>
      <p>sum:{sum}</p>
      {renderInputs()}
    </div>
  );
};

export default ChildComp;
