import "./App.css";

import { Input } from './Input/input';
import { Card } from './Card/card';

function App () {
  const citiesList = ['New York', 'Kyiv', 'London', 'Lviv'] //* Список назв міст
  return (
    <div className="Main">
          <Input/>
          <div className="CardList">
            {
              citiesList.map(city => <Card key={city} city={city}/>) 
            }
          </div>
    </div>
  );
}

export default App;