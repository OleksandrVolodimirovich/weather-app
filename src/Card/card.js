import React, { useEffect, useState } from "react";

import { API_KEY } from "../settings.js";
import "../App.css";

export const Card = ({ city }) => {
	const [data, setData] = useState(null);
	useEffect(() => {
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
		)
			.then((res) => res.json())
			// .then(json => setData(json)); - нижче спрощений варіант
			.then(setData);
	}, []);
	console.log("data => ", data);

    // data - видає на першому рендері null, тому неожемо її використовувати. Тобто дані ще не завантажилися, а React пробує щосьвиводити.
    // Для виправлення ситуації використовується if()
    // Якщо немає data повернути розмітку з коду "return (div className="Card"></div>)...""
    if(!data) return null;

	const { name, weather, main } = data;
	const { description, icon } = weather[0];
	const { temp, humidity, feels_like } = main;

	return (
		<div className="Card">
			<div className="MainInfo">
				<img className="Icon" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon"/>
				<div className="Title">{name}</div> {/*Назва міста */}

				<div className="Description">{description}</div> {/* Опис погодм */}
				<div className="Temperature">{temp.toFixed()}</div> {/* Температура */}
			</div>
			<div className="Information">
				<div>Humidify: {humidity}</div> {/* Вологість */}
				<div>Feels leek: {feels_like}</div> {/* Відчувається, як */}
			</div>
		</div>
	);
};
