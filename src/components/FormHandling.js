/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-onchange */
import React, { useState } from "react";

export default function FormHandling() {
  const initialValue = {
    fullname: "",
    address: "",
    married: "Yes",
    hobby: "Chess",
    music: true,
  };
  const [value, setValue] = useState(initialValue);
  const [submittedValue, setSubmittedValue] = useState([]);
  const [file, setFile] = React.useState("");
  const handleChange = (event) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };
  const handleCheckbox = (event) => {
    const checkboxValue =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setValue({
      ...value,
      [event.target.name]: checkboxValue,
    });
  };

  const handleSubmit = (event) => {
    setSubmittedValue([...submittedValue, value]);
    event.preventDefault();
  };
  const handleReset = (item) => {
    const returnArr = submittedValue.filter(
      (specificItem) => specificItem !== item
    );
    setSubmittedValue(returnArr);
    setValue(initialValue);
  };

  const handleUpload = (event) => {
    setFile(event.target.files[0]);
    console.log(event.target.files[0]);
  };
  return (
    <div>
      <h3>Form Handling</h3>
      <form action="submit">
        <label htmlFor="fullname">
          Full Name:
          <input
            placeholder="Enter Your Name"
            name="fullname"
            value={value.fullname}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />

        <label htmlFor="address">
          Address:{" "}
          <textarea
            name="address"
            value={value.address}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label htmlFor="married">
          Married:{" "}
          <label htmlFor="yes">
            <input
              type="radio"
              name="married"
              value="Yes"
              checked={value.married === "Yes"}
              onChange={handleChange}
            />{" "}
            Yes
          </label>
          <label htmlFor="no">
            <input
              type="radio"
              name="married"
              value="No"
              checked={value.married === "No"}
              onChange={handleChange}
            />
            No
          </label>
        </label>
        <br />
        <br />
        <label htmlFor="hobby">
          Hobby:{" "}
          <select name="hobby" onChange={handleChange} value={value.hobby}>
            <option value="Chess">Chess</option>
            <option value="Phising">Phising</option>
            <option value="Cricket">Cricket</option>
          </select>
        </label>
        <br />
        <br />
        <label htmlFor="love">
          Love Music:{" "}
          <input
            type="checkbox"
            name="music"
            checked={value.music}
            onChange={handleCheckbox}
          />
        </label>
        <br />
        <br />
        <label htmlFor="profile">
          Profile Picture:{" "}
          <input type="file" name="file" onChange={handleUpload} />
        </label>

        <br />
        <br />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      {submittedValue.map((item) => (
        <div>
          <h3>Name: {item.fullname}</h3>
          <h3>Address: {item.address}</h3>
          <h3>Married: {item.married}</h3>
          <h3>Hobby: {item.hobby}</h3>
          <h3>Music Lover: {item.music ? "Yes" : "No"}</h3>
          {file && <ImageThumb image={file} />}
          <div>
            <button type="submit" onClick={() => handleReset(item)}>
              Reset
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
// eslint-disable-next-line arrow-body-style
const ImageThumb = ({ image }) => {
  return (
    <img height="200px" src={URL.createObjectURL(image)} alt={image.name} />
  );
};
