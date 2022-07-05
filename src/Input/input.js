import React from "react";

import "../App.css";

export const Input = () => {
    const curreDate = new Date().toDateString(); //* об'єкт Date з методом toDateString котри виводить тільки д/м/р
    const handlOnChange = (event) => { //* ф-ція котра спостерігає за змінами даних в input
        console.log(event.target.value);
        console.log('handlOnChange');
    }
    const handlOnClick = () => { //* ф-ція кліку по button
        console.log('handlOnClick');
        console.log('button was clicked in', curreDate) //* по кліку button викликаємо змінну curreDate з датою
    }
  return (
    <div className="InputWrap">
      <input className="Input" onChange={handlOnChange} /> {/* //* використання ф-ції handlOnChange для input */}
      <button className="Button" onClick={handlOnClick}> + </button> {/* //* використання ф-ції handlOnClick для input */}
    </div>
  );
};
