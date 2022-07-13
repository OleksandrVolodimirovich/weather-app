import React, { useState } from "react";

import "../App.css";

// const InputTag = () => {
// 	const [inputValue, setInputValue] = useState("empty");
// 	const handleOnChange = (event) => {
// 		setInputValue(event.target.value);
// 	};

// 	console.log("render");

// 	return (
// 		<input className="Input" onChange={handleOnChange} value={inputValue} />
// 	);
// };

export const Input = ({ setCitiesList }) => {

  const [inputValue, setInputValue] = useState("empty");

	const handleOnClick = () => {
		setCitiesList((currentArray) => [...currentArray, "New York"]);
	};

  const handleOnChange = (event) => {
		setInputValue(event.target.value);
	};

	return (
		<div className="InputWrap">
			<input className="Input" onChange={handleOnChange} value={inputValue} />
			<button className="Button" onClick={handleOnClick}>
				+
			</button>
		</div>
	);
};
