import React, { useState } from "react";

import "../App.css";

const InputTag = () => {
	const [inputValue, setInputValue] = useState("empty");
	const handleOnChange = (event) => {
		setInputValue(event.target.value);
	};

	console.log("render");

	return (
		<input className="Input" onChange={handleOnChange} value={inputValue} />
	);
};

export const Input = ({ setCitiesList }) => {
  const handleOnClick = () => {
    setCitiesList((currentArray) => {
      console.log('currentArray before', currentArray)
      currentArray.push('New York');
      console.log('currentArray after', currentArray)
      return [...currentArray, 'New York'];
    })
  }
	return (
		<div className="InputWrap">
			<InputTag />
			<button className="Button" onClick={handleOnClick}>+</button>
		</div>
	);
};
