import withToggle from './1.HOC';

const MyComponent = ({ toggle, toggleHandler }) => {
  return (
    <div>
      <button onClick={toggleHandler}>Toggle</button>
      {toggle && <p>Toggle is ON</p>}
    </div>
  );
};

const MyComponentWithToggle = withToggle(MyComponent);

export default MyComponentWithToggle;
