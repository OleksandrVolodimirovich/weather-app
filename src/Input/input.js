import React, { useState, useRef } from "react"; // *добавив hook => useRef

import "../App.css";

export const Input = ({ setCitiesList }) => {
	const [inputValue, setInputValue] = useState("Lviv");
	const inputRef = useRef(null); // *помістив у змінну hook => useRef з значенням null

	const handleOnClick = () => {
		console.log("inputRef =>", inputRef); //* при кліку виводиться hook => useRef, який знаходиться у змінній inputRef
		setCitiesList((currentArray) => [...currentArray, inputValue]);
    setInputValue(''); //* після натискання кнопки '+', введена назва міста в поле input очищається
		inputRef.current.focus();//* при введенні міста фокус залишається в input
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
