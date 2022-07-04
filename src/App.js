import "./App.css";

import { Input } from './Input/input';
import { Card } from './Card/card';

function App () {
  return (
    <div className="Main">
          <Input/>
          <div className="CardList">
            <Card city={'New York'}/>
            <Card city={'Kyiv'}/>
            <Card city={'London'}/>
          </div>
    </div>
  );
}

export default App;