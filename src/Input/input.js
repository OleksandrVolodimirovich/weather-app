import React, { useState, useRef } from "react";

import "../App.css";

export const Input = ({ setCitiesList }) => {
	const [inputValue, setInputValue] = useState("Lviv");
	const inputRef = useRef(null);

	const handleOnClick = () => {
		console.log("inputRef =>", inputRef);
		setCitiesList((currentArray) => [...currentArray, inputValue]);
    setInputValue(''); 
		inputRef.current.focus();
	};

	const handleOnChange = (event) => {
		setInputValue(event.target.value);
	};

	return (
		<div className="InputWrap">
			<input
				className="Input"
				onChange={handleOnChange}
				value={inputValue}
				ref={inputRef}
			/>{" "}
			{/* //* прокидуємо в useRef в середину DOM-elementa input */}
			<button className="Button" onClick={handleOnClick}>
				+
			</button>
		</div>
	);
};
