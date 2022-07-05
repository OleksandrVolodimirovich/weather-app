import React from "react";

import "../App.css";

export const Input = () => {
    const curreDate = new Date().toDateString(); //* об'єкт Date з методом toDateString котри виводить тільки д/м/р
    const handlOnChange = (event) => { //* ф-ція котра спостерігає за змінами даних в input
        console.log(event.target.value);
    }
    const handlOnClick = (value) => () => { //* Викликаю дві ф-ції в першій curreDate
        console.log('button was clicked in', value) 
    }
  return (
    <div className="InputWrap">
      <input className="Input" onChange={handlOnChange} /> {/* //* використання ф-ції handlOnChange для input */}
      <button className="Button" onClick={handlOnClick(curreDate)}> + </button> {/* //* В onClick помістив змінну curreDate */}
    </div>
  );
};
