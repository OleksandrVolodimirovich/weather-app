import React, { useEffect } from "react";

import { Card } from "../Card/card";

import "../App.css";

export const CardList = ({ citiesList }) => (
	<div className="CardList">
		{citiesList.map((city) => (
			<Card key={city} city={city} />
		))}
	</div>
);
