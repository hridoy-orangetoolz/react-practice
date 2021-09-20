/* eslint-disable react/no-array-index-key */
/* eslint-disable object-shorthand */
import React from "react";

export default function List({
  title,
  description,
  handleTitle,
  handleDescription,
  handleSubmit,
  handleDelete,
  arr,
}) {
  return (
    <div className="main">
      <form action="submit">
        <label htmlFor="title">
          Title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleTitle}
          />
        </label>
        <br />
        <br />
        <label htmlFor="title">
          Description:
          <textarea
            type="text"
            name="description"
            value={description}
            onChange={handleDescription}
          />
        </label>
        <br />
        <br />

        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <div className="list">
        {arr.map((item, index) => (
          <div key={index}>
            <h3>{item.title}</h3>
            <h3>{item.description}</h3>
            <button type="submit" onClick={() => handleDelete(item)}>
              Delete
            </button>
            <br />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}
