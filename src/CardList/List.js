import React, { useEffect } from "react";

import { Card } from "../Card/card";

import "../App.css";

export const CardList = ({ citiesList }) => {
	useEffect(() => { 
		console.log("useEffect => citiesList", citiesList);
		return () => { // * function unmount 
			console.log('unmount');
		}
	}, []);
	console.log("render");
	return (
		<div className="CardList">
			{citiesList.map((city) => (
				<Card key={city} city={city} />
			))}
		</div>
	);
};
