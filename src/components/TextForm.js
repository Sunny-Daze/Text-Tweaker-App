import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpperClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("Text transformed to Uppercase", "success");
  };

  const handleLowerClick = () => {
    setText(text.toLowerCase());
    props.showalert("Text transformed to Lowercase", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showalert("Text cleared", "success");
  };

  const handleInverseClick = () => {
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] === text[i].toUpperCase()) {
        newText += text[i].toLowerCase();
      } else {
        newText += text[i].toUpperCase();
      }
    }
    setText(newText);
    props.showalert("Text case inversed", "success");
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showalert("Text copied to clipboard", "success");
  };

  const handleSpaceClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showalert("Extra spaces has been removed successfully", "success");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "#042743" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="5"
            value={text}
            onChange={handleChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#13466e",
              color: props.mode === "light" ? "#042743" : "white",
            }}
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleUpperClick}
        >
          Convert to UpperCase
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleLowerClick}
        >
          Convert to LowerCase
        </button>
        <button
          className="btn btn-primary my-1 mx-2"
          onClick={handleClearClick}
        >
          Clear Canvas
        </button>
        <button
          className="btn btn-primary my-1 mx-2"
          onClick={handleInverseClick}
        >
          Inverse Case
        </button>
        <button className="btn btn-primary my-1 mx-2" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleSpaceClick}
        >
          Remove Extra White Spaces
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "#042743" : "white" }}
      >
        <h2>Your Text Summary : </h2>
        <p>
          <b>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }
          </b>{" "}
          Words, <b>{text.length} </b>
          Characters
        </p>
        <p>
          <b>{text ? 0.008 * text.split(" ").length : 0}</b> Minutes Read
        </p>
        <h2>Preview of your text : </h2>
        <p>
          <b>{text ? text : "Enter your text in the text box to preview"}</b>
        </p>
      </div>
    </>
  );
}
