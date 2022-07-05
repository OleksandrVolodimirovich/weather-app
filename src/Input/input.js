import React, { useState } from "react";

import "../App.css";

export const Input = () => {
	const [inputValue, setInputValue] = useState('empty') //*[якась змінна, ф-ція котра може змінити значення змінної] = ('тут можна вказати дефолтне значення')
  const curreDate = new Date().toDateString();
  const handleOnChange = (event) => {
    setInputValue(event.target.value); //* за допомогою ф-ції setInputValue змінюю state і засетую в input, котрий рівний тут inputValue
  };

  const handleOnClick = (value) => () => {
    console.log("button was clicked in", value);
  };

	console.log('render')

  return (
    <div className="InputWrap">
      <input className="Input" onChange={handleOnChange} value={inputValue} />  {/*//* задопомогою  value виведу дефолтне значення useState */}
      <button className="Button" onClick={handleOnClick(curreDate)}>+</button>
    </div>
  );
};
