import React, { useState, useRef } from "react";

import "../App.css";

export const Input = ({ setCitiesList }) => {
	const [inputValue, setInputValue] = useState("Lviv");
	const [someValue, setSomeValue] = useState("0");
	const inputRef = useRef(null);

	const handleOnClick = () => {
		setCitiesList((currentArray) => [...currentArray, inputValue]);
		setInputValue("");
		inputRef.current.focus();
	};

	const handleOnChange = (event) => {
		setInputValue(event.target.value);
	};

	const onSomeClick = (event) => {
		setSomeValue((someValue) => someValue + 1);
	};
	console.log("inputValue => ", inputValue);
	console.log("from render => ", `${inputValue}_${Math.random()}`);
	console.log("someValue => ", someValue);

	return (
		<div className="InputWrap">
			<input
				className="Input"
				onClick={onSomeClick}
				onChange={handleOnChange}
				value={inputValue}
				ref={inputRef}
			/>
			<button className="Button" onClick={handleOnClick}>
				+
			</button>
		</div>
	);
};
