import React, { useState } from "react";

import "./App.css";

import { Input } from "./Input/input";
import { CardList } from "./CardList/List";

function App() {
	const [citiesList, setCitiesList] = useState([]);
	return (
		<div className="Main">
			<Input setCitiesList={setCitiesList} />
			{citiesList.length === 1 && <CardList citiesList={citiesList} />} 
			{/* <CardList citiesList={citiesList} /> */}
		</div>
	);
}

export default App;
