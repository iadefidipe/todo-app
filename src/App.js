import Header from "./component/Header"
import Todo from "./component/Todo"
import "./styles/App.scss"
// import { useState, useEffect } from 'react';
import { DragDropContext} from "react-beautiful-dnd"

function App() {
  return (
    <DragDropContext>
      <div className='App dark-mode'>
        <div className='main-container'>
          <div className='container-wrap'>
            <Header />
            <Todo />
          </div>
        </div>
      </div>
    </DragDropContext>
  )
}

export default App
