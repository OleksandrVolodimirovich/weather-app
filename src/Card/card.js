import React from "react";

import "../App.css";

export const Card = ({ city }) =>{    // *застосовую деструктиризацію
    return ( 
        <div className="Card">
            <div className="MainInfo">
                <img className="Icon" src="https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-02-48.png" alt="icon"/>
                <div className="Title">{city}</div> {/* //*Вставляю змінну city */}
                
                <div className="Description">Cloudy</div>
                <div className="Temperature">20</div>
            </div>
            <div className="Information">
                <div>Humidify: 15</div>
                <div>Feels leek: 19</div>
            </div>
        </div>
    );
}





