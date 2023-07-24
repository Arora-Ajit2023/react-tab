import React, { useEffect, useState } from 'react';

const ChildInputComp = ({ input }) => {
  const [values, setValue] = useState('');
  const [data, setData] = useState([]);

  const handelValueCahnge = (e) => {
    setValue(e.target.value);
  };

  const handalSubmit = (e) => {
    e.preventDefault();
    setData((prev) => {
      return [...prev, values];
    });
  };
  console.log(data);
  return (
    <div>
      {input.map((item) => {
        return (
          <div key={item.index}>
            <form onSubmit={handalSubmit}>
              <label>
                {item.Inputlabel}
                <input
                  type={item.inputtype}
                  placeholder={item.placeholder}
                  defaultValue={item.defaultValue}
                  onChange={handelValueCahnge}
                />
              </label>
              <button>submit</button>
            </form>
          </div>
        );
      })}
    </div>
  );
};

export default ChildInputComp;
