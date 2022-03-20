import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    setText(text.toUpperCase());
  };

  return (
    <>
      <div className="container my-5">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="9"
            value={text}
            onChange={handleChange}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleClick}>
          Convert to UpperCase
        </button>

        <div className="container my-5">
          <h1>Your text Summary : </h1>
          {/* <p>3434 Words and {text.length} characters</p> */}
          {/* <h3>{text.split(" ").length} Words</h3> */}
          {/* <h3>{text.length()} Characters</h3> */}
        </div>
      </div>
    </>
  );
}
