import React, { useState } from "react";

export default function EventHandling() {
  const [value, setValue] = useState("");
  const [updateValue, setUpdateValue] = useState([]);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleClick = () => {
    setUpdateValue(value);
    setValue("");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your value"
        value={value}
        onChange={handleChange}
      />
      <button type="button" onClick={handleClick}>
        Press
      </button>
      <h1>{updateValue}</h1>
    </div>
  );
}
