/* eslint-disable no-lonely-if */
/* eslint-disable no-alert */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-multi-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React, { useRef, useState } from "react";

export default function TodoList() {
  const titleRef = useRef(null);
  const valueRef = useRef(null);
  const specificIndexRef = useRef(null);
  const [add, setAdd] = useState([]);

  const handleAdd = () => {
    const Title = titleRef.current.value;
    const Value = valueRef.current.value;
    const Index = specificIndexRef.current.value;

    if (add.some((item) => item.title === Title)) {
      alert(`${Title} already exists.`);
      setAdd([...add]);
      console.log(add);
    } else {
      if (Index < add.length) {
        const UpdatedValue = add.splice(Index, 0, {
          title: Title,
          value: Value,
        });
        setAdd([...add]);
      } else {
        const UpdatedValue = add.push({
          title: Title,
          value: Value,
        });
        setAdd([...add]);
      }
    }

    titleRef.current.value = "";
    valueRef.current.value = "";
    specificIndexRef.current.value = "";
  };

  const handleDelete = (item) => {
    const returnArr = add.filter((specificItem) => specificItem !== item);
    setAdd(returnArr);
  };

  return (
    <div>
      <h1>useRef Practice</h1>
      <label htmlFor="title">
        Title: <input type="text" ref={titleRef} />
      </label>
      <br />
      <br />
      <label htmlFor="value">
        Value: <input type="text" ref={valueRef} />
      </label>
      <br />
      <br />
      <label htmlFor="index">
        Index: <input type="text" ref={specificIndexRef} />
      </label>
      <br />
      <br />
      <button onClick={handleAdd}>Submit</button>

      {add.map((item, index) => (
        <div key={index}>
          <h3>Title: {item.title}</h3>
          <h3>Value: {item.value}</h3>
          <button onClick={() => handleDelete(item)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
