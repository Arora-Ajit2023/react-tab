import React, { useState } from 'react';

const Conditional_Rendaring = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <p> I am {isActive ? 'Active' : 'Not Actives'}</p>
      <button onClick={() => setIsActive((isActive) => !isActive)}>
        {!isActive ? 'Active' : 'NOt Active'}
      </button>
    </div>
  );
};

export default Conditional_Rendaring;
