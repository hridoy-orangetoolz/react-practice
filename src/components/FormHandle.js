/* eslint-disable no-multi-assign */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-onchange */
import React, { useRef, useState } from "react";

// eslint-disable-next-line arrow-body-style

export default function FormHandling() {
  const nameRef = useRef(null);
  const addressRef = useRef(null);
  const marriedRef = useRef("Yes");
  const hobbyRef = useRef("Chess");
  const musicRef = useRef(true);
  const dateTimeRef = useRef(null);
  const imageUploadRef = useRef(null);

  const [submittedValue, setSubmittedValue] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const Fullname = nameRef.current.value;
    const Address = addressRef.current.value;
    const Married = marriedRef.current.value;
    const Hobby = hobbyRef.current.value;
    const Music = musicRef.current.value;
    const DateTime = dateTimeRef.current.value;

    const ImageUpload = imageUploadRef.current.files[0];
    const ImageUrl = URL.createObjectURL(ImageUpload);

    const formData = {
      fullname: Fullname,
      address: Address,
      married: Married,
      hobby: Hobby,
      music: Music,
      dateTime: DateTime,
      imgUrl: ImageUrl,
    };
    setSubmittedValue([...submittedValue, formData]);
    console.log(submittedValue);
  };
  const handleReset = (item) => {
    const returnArr = submittedValue.filter(
      (specificItem) => specificItem !== item
    );
    setSubmittedValue(returnArr);
  };

  return (
    <div>
      <h3>Form Handling</h3>
      <form action="submit">
        <label htmlFor="fullname">
          Full Name:
          <input placeholder="Enter Your Name" name="fullname" ref={nameRef} />
        </label>
        <br />
        <br />

        <label htmlFor="address">
          Address: <textarea name="address" ref={addressRef} />
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
              defaultChecked={marriedRef.current.checked === "Yes"}
              ref={marriedRef}
            />{" "}
            Yes
          </label>
          <label htmlFor="no">
            <input
              type="radio"
              name="married"
              value="No"
              defaultChecked={marriedRef.current.checked === "No"}
              ref={marriedRef}
            />
            No
          </label>
        </label>
        <br />
        <br />
        <label htmlFor="hobby">
          Hobby:{" "}
          <select name="hobby" ref={hobbyRef}>
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
            ref={musicRef}
            checked={musicRef.current.checked}
          />
        </label>
        <br />
        <br />
        <label htmlFor="datatime">
          Meeting: <input type="datetime-local" ref={dateTimeRef} />
        </label>
        <br />
        <br />
        <label htmlFor="profile">
          Profile Picture:{" "}
          <input
            type="file"
            name="file"
            ref={imageUploadRef}
            // onChange={handleUpload}
          />
        </label>

        <br />
        <br />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>

      {submittedValue.map((item, index) => (
        <div key={index}>
          <h3>Name: {item.fullname}</h3>
          <h3>Address: {item.address}</h3>
          <h3>Married: {item.married}</h3>
          <h3>Hobby: {item.hobby}</h3>
          <h3>Music Lover: {item.music ? "Yes" : "No"}</h3>
          <h3>Meeting: {item.dateTime}</h3>
          <UploadImage image={item.imgUrl} />
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

const UploadImage = ({ image }) => (
  <img height="200px" src={image} alt={image.name} />
);
