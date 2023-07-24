import React, { useState } from 'react';
import ChildInputComp from './ChildInputComp';

const InputComp = () => {
  const [inputDetails, setInputDetails] = useState({
    inputtype: '',
    placeholder: '',
    defaultValue: '',
    Inputlabel: '',
  });

  const [data, setData] = useState([]);

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setInputDetails({ ...inputDetails, [name]: value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    setData((prev) => {
      return [...prev, inputDetails];
    });
    setInputDetails({
      inputtype: '',
      placeholder: '',
      defaultValue: '',
      Inputlabel: '',
    });
    console.log(inputDetails);
  };

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <select
          value={inputDetails.inputtype}
          name='inputtype'
          onChange={handleInputChange}
        >
          <option value=''>Select input Type</option>
          <option value='text'>text</option>
          <option value='password'>password</option>
          <option value='email'>email</option>
          <option value='number'>number</option>
        </select>
        <label>
          Placeholder
          <input
            type='text'
            name='placeholder'
            value={inputDetails.placeholder}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Default value
          <input
            type='text'
            name='defaultValue'
            value={inputDetails.defaultValue}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Label
          <input
            type='text'
            name='Inputlabel'
            value={inputDetails.Inputlabel}
            onChange={handleInputChange}
          />
        </label>
        <button type='submit'>Add to ui</button>
      </form>
      <ChildInputComp input={data} />
    </div>
  );
};

export default InputComp;
