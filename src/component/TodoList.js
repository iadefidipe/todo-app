import TodoItem from "./TodoItem"
import { Droppable } from "react-beautiful-dnd"

const TodoList = ({ data, handleComplete, handleDelete }) => {
  return (
    <Droppable droppableId='TodoList'>
      {(provided) => {
        <div className='todo-list' ref={provided.innerRef} {...provided.droppableProps} >
          {data.map((todo) => (
            <TodoItem
              todo={todo}
              handleComplete={handleComplete}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      }}
    </Droppable>
  )
}

export default TodoList
