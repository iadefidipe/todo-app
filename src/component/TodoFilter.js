

const TodoFilter = () => {
    return (
        <div className="todo-filter" >
            <p> 5 items left</p>
            <div className="filter">
                <h3>All</h3>
                <h3> Active</h3>
                <h3> Completed</h3>
            </div>
            <p> Clear completed</p>
        </div>
    )
}

export default TodoFilter;
