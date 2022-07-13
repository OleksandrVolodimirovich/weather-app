import React, { useState } from "react";

import "./App.css";

import { Input } from './Input/input';
import { Card } from './Card/card';

function App () {
  const [citiesList, setCitiesList] = useState(['New York', 'Kyiv', 'London', 'Lviv']);
  return (
    <div className="Main">
          <Input setCitiesList={setCitiesList}/>
          <div className="CardList">
            {
              citiesList.map(city => <Card key={city} city={city}/>) 
            }
          </div>
    </div>
  );
}

export default App;