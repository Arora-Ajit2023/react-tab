import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchComp = () => {
  const [category, setCategory] = useState([]);
  const inputRef = useRef('');
  const navigate = useNavigate();

  const handelClick = () => {
    let inputValue = inputRef.current.value;
    axios(`https://dummyjson.com/products/category/${inputValue.toLowerCase()}`)
      .then((result) => {
        if (result.data) {
          setCategory(result.data.products);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    inputRef.current.value = '';
  };

  console.log(category);

  return (
    <div>
      <input type='text' ref={inputRef} placeholder='search' />
      <button onClick={handelClick}>Search</button>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          rowGap: '1rem',
          marginTop: '3rem',
        }}
      >
        {category.map((data) => {
          return (
            <div
              key={data.id}
              style={{
                width: 220,
                border: '1px solid silver',
                textAlign: 'center',
              }}
              onClick={() => {
                navigate(`/product/${data.id}`);
              }}
            >
              <p>{data.title}</p>
              <p>{data.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchComp;
