import React, { useState } from "react";

import "./App.css";

import { Input } from "./Input/input";
// import { Card } from './Card/card';
import { CardList } from "./CardList/List";

function App() {
	const [citiesList, setCitiesList] = useState([]);
	return (
		<div className="Main">
			<Input setCitiesList={setCitiesList} />
			{citiesList.length === 1 && <CardList citiesList={citiesList} />} 
      {/* //* Приклад unmount:
       //* якщо не буде міста - тоді не зарендериться unmount (на екрані не буде карточок)
       //* якщо одне місто - тоді зарендериться (на екрані буде карточока)
       //* якщо два міста - тоді не зарендериться unmount (на екрані не буде карточок)*/}
			{/* <CardList citiesList={citiesList} /> */}
		</div>
	);
}

export default App;
