import { useState, useEffect } from 'react'
import TodoList from './TodoList';

const Todo = () => {

  const [text, setText] = useState('')
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState(false)


  // fetch data on page load
  useEffect(() => {

    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:8000/todo')
        if (!res.ok) throw new Error('Could not fetch data!')
        const data = await res.json()
        setTodos(data)

      }
      catch (err) {
        alert(err.message)
        console.error(err)
      }
    }

    fetchData()

  }, []
  )





//  handles onsubmit for the the todo-input section
  const handleSubmit = (e) => {
    e.preventDefault()
    const todo = { text, completed }
    addTodo(todo)

  }

  // update database with new todo and it to state too

  const addTodo = async (todo) => {

    const response = await fetch('http://localhost:8000/todo/', {
      method:'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(todo)
    })
    
    const data = await response.json()

    setTodos([...todos, data])
    setText('') 
  }


// fectch todo data with specific id
const fetchTodo = async (id) => {
  const response = await fetch(`http://localhost:8000/todo/${id}`)
  const data = await response.json()

  return data
}

const handleComplete = async (id) => {
  const todoCompleted = await fetchTodo(id)
  const updatedTodo = { ...todoCompleted, completed: !todoCompleted.completed}
  
  const res = await fetch(`http://localhost:8000/todo/${id}`,{
    method: 'PUT',
    headers:{
      'Content-type': 'application/json'
    },
    body: JSON.stringify(updatedTodo)
  }
  )

  const data = await res.json()


  setTodos(todos.map((todo) => todo.id === id ? {...todo, completed: !data.completed} : todo ))
  
};





  return (
    <>
      <section className="todo-container">

        <form action="" className="todo-input" onSubmit={handleSubmit} >
          <input type="checkbox" disabled={true} className="totdo-input-check" />

          <input type="text" name="" id="" placeholder="Create a new todo..." className="todo-input-text" value={text} onChange={(e) => {
            setText(e.target.value)
            setCompleted(false)
          }} />
        </form>

        <TodoList data={todos} handleComplete = {handleComplete} />


      </section>


    </>
  )
}

export default Todo;
