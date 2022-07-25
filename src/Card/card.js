import React, { useEffect, useState } from "react";

import { API_KEY } from "../settings.js";
import "../App.css";

export const Card = ({ city }) => {
	const [data, setData] = useState(null)
	useEffect(() => {
		fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
			.then(res => res.json())
			// .then(json => setData(json)); - нижче спрощений варіант
			.then(setData);
	}, []);
	console.log("data => ", data);

	return (
		<div className="Card">
			<div className="MainInfo">
				<img
					className="Icon"
					src="https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-02-48.png"
					alt="icon"
				/>
				<div className="Title">{city}</div>

				<div className="Description">Cloudy</div>
				<div className="Temperature">20</div>
			</div>
			<div className="Information">
				<div>Humidify: 15</div>
				<div>Feels leek: 19</div>
			</div>
		</div>
	);
};
