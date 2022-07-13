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
			<CardList citiesList={citiesList} />
			{/* <div className="CardList">
            {
              citiesList.map(city => <Card key={city} city={city}/>) 
            }
          </div> */}
		</div>
	);
}

export default App;
