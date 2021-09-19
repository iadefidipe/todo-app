import React from 'react'

const TodoList = ({ data, handleComplete  }) => {

    

    


    return (

        <div className='todo-list'>
            {data.map(todo => (
                <div className="todo" key={todo.id}>

                    <input type="checkbox" className="todo-check" id={todo.id} name="check" checked={todo.completed === true ? true : false} onChange={() => {
                        handleComplete(todo.id);
                    }} />

                    <label htmlFor={todo.id}>{todo.text}</label>

                </div>
            ))}
        </div>
    )
}

export default TodoList;
