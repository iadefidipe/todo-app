import { useState, useEffect } from 'react'
import TodoList from './TodoList';

const Todo = () => {

  const [text, setText] = useState('')
  const [data, setData] = useState([]);
  const [completed, setCompleted] = useState(false)

  useEffect(() => {

    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:8000/todo')
        if (!res.ok) throw new Error('Could not fetch data!')
        const data = await res.json()
        setData(data)

      }
      catch (err) {
        alert(err.message)
        console.error(err)
      }
    }

    fetchData()





  }, []
  )




  const handleSubmit = (e) => {
    e.preventDefault()


    const todo = { text, completed }



    fetch('http://localhost:8000/todo/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo)
    }).then(() => { setText('') })

  }




  return (
    <>
      <section className="todo-container">

        <form action="" className="todo-input" onSubmit={handleSubmit} >
          <input type="checkbox" disabled={true} className="totdo-input-check" />

          <input type="text" name="" id="" placeholder="Create a new todo..." className="todo-input-text" value={text} onChange={(e) => setText(e.target.value)} />
        </form>

        <TodoList data={data} />


      </section>


    </>
  )
}

export default Todo;
