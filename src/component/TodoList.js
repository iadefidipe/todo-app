import deleteIcon from '../asset/images/icon-cross.svg'

const TodoList = ({ data, handleComplete, handleDelete }) => {
    return (

        <div className='todo-list'>
            {data.map(todo => (
                <div className={ todo.completed === true ?  "todo active" : " todo completed"} key={todo.id}>

                    <div className="todo-item">
                        <input type="checkbox" className="todo-check" id={todo.id} name="check" checked={todo.completed === true ? true : false} onChange={() => {
                            handleComplete(todo.id);
                        }} />
                        <label htmlFor={todo.id}>{todo.text}</label>
                    </div>

                    <div className="delete">
                        <img src={deleteIcon} alt="delete-todo" onClick = { () => handleDelete(todo.id)} />
                    </div>                  

                </div>
            ))}
        </div>
    )
}

export default TodoList;
