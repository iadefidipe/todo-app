import { useState, useEffect } from 'react'
import TodoFilter from './TodoFilter';
import TodoList from './TodoList';

const Todo = () => {

  const [text, setText] = useState('')
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState(false)

 
  const todoLength = todos.filter( (todo) => todo.completed === false ).length
  


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


 //TODO: Add && Update notification
 useEffect(() => {
  if (todoLength > 0) {
    const notification = todoLength > 1 ? `Todos` : `Todo`;
    document.title = ` (${todoLength}) ${notification} `;
  }
});


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

 const handleDelete = async (id) =>{
   await fetch (`http://localhost:8000/todo/${id}`,{
    method: 'DELETE'
  })

  setTodos( todos.filter((todo) => todo.id !== id))
 }

//  const handleClearCompleted = async () => {
//   const ClearCompleted = todos.filter( (todo) => todo.completed === false)

  

  // const res = await fetch(`http://localhost:8000/todo/${}`,{
  //   method: 'DELETE',
  //   headers:{
  //     'Content-type': 'application/json'
  //   },
  //   body: JSON.stringify(ClearCompleted)
  // }
  // )

//   const data = await res.json()

//   setTodos(data)
// }

const handleClearCompleted = () => {

  const ClearCompleted = todos.filter( (todo) => todo.completed === true)

  console.log(ClearCompleted)

  ClearCompleted.forEach( async (todo) =>{
    await fetch(`http://localhost:8000/todo/${todo.id}`,{
    method: 'DELETE'}
  )

  })

  setTodos(todos.filter( (todo) => todo.completed === false ))
}

//  filters

// const handleAll = () => {

// }

const handleAll = () => {
  document.querySelectorAll('.todo').forEach( (todoItem) => todoItem.style.display = 'flex')

}

const filterTodoList = (className) => {
  document.querySelectorAll('.todo').forEach( (todoItem) => {
    if(todoItem.classList.contains(className)){
      todoItem.style.display = 'none'
    }
    else{
      todoItem.style.display = 'flex'
    }
  }  )
}

const handleActive = () => {
  filterTodoList('active')
}

const handleCompleted = () => {

  filterTodoList('completed')
 

}





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

        <TodoList data={todos} handleComplete = {handleComplete} handleDelete = {handleDelete} />

        <TodoFilter handleActive ={handleActive} handleCompleted= {handleCompleted} handleAll= { handleAll} handleClearCompleted = {handleClearCompleted} todoLength = { todoLength} />



      </section>


    </>
  )
}

export default Todo;
