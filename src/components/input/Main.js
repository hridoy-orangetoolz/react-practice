import React, { useState } from "react";
import ListView from "./List";

export default function Main() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [formArr, setFormArr] = useState([]);

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const formData = {
    title,
    description,
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormArr([...formArr, formData]);
  };
  const handleDelete = (item) => {
    const newArr = formArr.filter((specificItem) => specificItem !== item);
    setFormArr(newArr);
    setTitle("");
    setDescription("");
  };
  return (
    <div>
      <ListView
        title={title}
        description={description}
        handleSubmit={handleSubmit}
        handleTitle={handleTitle}
        handleDescription={handleDescription}
        handleDelete={handleDelete}
        arr={formArr}
      />
    </div>
  );
}
