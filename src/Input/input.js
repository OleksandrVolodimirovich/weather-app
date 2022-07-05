import React from "react";

import "../App.css";

export const Input = () => {
  const curreDate = new Date().toDateString();
  const handleOnChange = (event) => {
    console.log(event.target.value);
  };
  const handleOnClick = (value) => () => {
    console.log("button was clicked in", value);
  };
	const handleSubmit = (event) => {
		event.preventDefault();
    console.log("handleSubmit");
  };
  return (
    <div className="InputWrap">
      <form onSubmit={handleSubmit}>
        <input className="Input" onChange={handleOnChange} />
        <button className="Button" onClick={handleOnClick(curreDate)}>+</button>
      </form>
    </div>
  );
};
