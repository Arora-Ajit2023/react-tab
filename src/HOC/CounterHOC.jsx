import React, { useState } from 'react';

const CounterHOC = (WrapperComp) => {
  return function ToggleFun(props) {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
      setToggle(!toggle);
    };
    return (
      <WrapperComp {...props} toggle={toggle} handleToggle={handleToggle} />
    );
  };
};

export default CounterHOC;
