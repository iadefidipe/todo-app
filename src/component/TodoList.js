import TodoItem from './TodoItem';

const TodoList = ({ data, handleComplete, handleDelete }) => {
    return (

        <div className='todo-list'>
            {data.map(todo => (
                <TodoItem todo={todo} handleComplete={handleComplete} handleDelete={handleDelete} />
            ))}
        </div>
    )
}

export default TodoList;
