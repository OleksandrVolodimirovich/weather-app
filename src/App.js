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
              citiesList.map(city => <Card key={city} city={city}/>) //* пребір масива за допомогою map і формування карточки
                //* react вимагає застосувати ключ key, можна використати змінну, а index краще не використовувати
            }
          </div>
    </div>
  );
}

export default App;