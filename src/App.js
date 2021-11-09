
import Header from './component/Header';
import Todo from './component/Todo';
import './styles/App.scss';
// import { useState, useEffect } from 'react';

function App() {

  return (
    <div className="App dark-mode">
      <div className="main-container">
        <div className='container-wrap'>
          <Header />
          <Todo />
        </div>
        
      </div>
    </div>
  );
}

export default App;
