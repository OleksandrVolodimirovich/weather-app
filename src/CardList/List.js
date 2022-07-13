import React, { useEffect } from "react"; //* додано useEffect

import { Card } from "../Card/card";

import "../App.css";

export const CardList = ({ citiesList }) => {
	useEffect(() => { 
		console.log("useEffect => citiesList", citiesList); //* useEffect в консоль
	});
	console.log("render"); //* виконання render
	return (
		<div className="CardList">
			{citiesList.map((city) => (
				<Card key={city} city={city} />
			))}
		</div>
	);
};
