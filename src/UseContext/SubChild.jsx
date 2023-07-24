import React, { useContext } from 'react';
import { profileContext } from './Context';

const SubChild = () => {
  const { name, city } = useContext(profileContext);
  return (
    <div>
      <h1>
        This is SubChild :{name} {city}
      </h1>
    </div>
  );
};

export default SubChild;
