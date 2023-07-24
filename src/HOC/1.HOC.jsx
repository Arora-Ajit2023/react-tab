import React from 'react';

const withToggle = (WrappedComponent) => {
  return function WithToggle111(props) {
    const [toggle, setToggle] = React.useState(false);

    const toggleHandler = () => {
      setToggle((prevState) => !prevState);
    };

    return (
      <WrappedComponent
        toggle={toggle}
        toggleHandler={toggleHandler}
        {...props}
      />
    );
  };
};
export default withToggle;
