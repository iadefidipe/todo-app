import React from 'react'

const TodoList = ({ data }) => {

    console.log(data)


    return (

        <div className='todo-list'>
            {data.map(todo => (
                <div className="todo" key={todo.id}>

                    <input type="checkbox" className="todo-check" id={todo.id} name="check" />

                    <label htmlFor={todo.id}>{todo.text}</label>

                </div>
            ))}
        </div>
    )
}

export default TodoList;
