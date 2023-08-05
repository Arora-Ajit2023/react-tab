import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CheckboxComp = () => {
  const [catg, setCatg] = useState([]);

  useEffect(() => {
    axios('https://dummyjson.com/products/categories')
      .then((result) => {
        setCatg(result.data.slice(0, 5));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <>
        {catg.map((category) => {
          return (
            <>
              <input type='checkbox' value={category} />
              <label>{category}</label>
            </>
          );
        })}
      </>
    </div>
  );
};

export default CheckboxComp;
