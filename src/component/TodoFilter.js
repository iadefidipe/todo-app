

const TodoFilter = ({ handleAll, handleActive, handleCompleted,  handleClearCompleted}) => {
    return (
        <div className="todo-filter" >
            <p> 5 items left</p>
            <div className="filter">
                <h3 onClick = { () => handleAll () }>All</h3>
                <h3 onClick = { () => handleActive() }> Active</h3>
                <h3 onClick = { () => handleCompleted() }> Completed</h3>
            </div>
            <p onClick = { () => handleClearCompleted() }> Clear completed</p>
        </div>
    )
}

export default TodoFilter;
