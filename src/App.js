
import Header from './component/Header';
import Todo from './component/Todo';
import './styles/App.scss';
import { useState, useEffect} from 'react';

function App() {

  


  

  return (
    <div className="App dark-mode">
      <div className="main-container">
        <Header />
        <Todo />
      </div>
    </div>
  );
}

export default App;
