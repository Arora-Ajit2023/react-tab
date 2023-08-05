import { useEffect, useState } from 'react';

const Input = () => {
  const [inputs, setInputs] = useState([
    { id: 1, label: 1, value: '' },
    { id: 2, label: 2, value: '' },
    { id: 3, label: 3, value: '' },
  ]);

  const AddInput = () => {
    const newInput = [...inputs];
    for (let i = 1; i <= 3; i++) {
      const obj = {
        label: inputs.length + i,
        id: inputs.length + i,
        value: '',
      };
      newInput.push(obj);
    }
    setInputs(newInput);
  };

  const onInputChange = (e) => {
    const inputNew = [...inputs];
    const { name, value } = e.target;
    for (let i = 0; i < inputs.length; i++) {
      if (inputNew[i].label === Number(name)) {
        console.log(inputNew[i].label, value);
        inputNew[i].value = value;
      }
    }
    setInputs(inputNew);
  };

  return (
    <div>
      {inputs.map((el) => {
        return (
          <input
            type='text'
            value={el.value}
            key={el.id}
            name={el.label}
            onChange={onInputChange}
          />
        );
      })}
      <button onClick={AddInput}>Add Inputs</button>
    </div>
  );
};

export default Input;
