function TodoList({onToggle,onDelete,onMoveUp, onMoveDown, todos}){
  return(
    <ul>
        {todos.map((todo) => (
          <li 
            key={todo.id}
            onClick={()=> onToggle(todo.id)}
            style={{textDecoration: todo.completed? "line-through": "none", cursor: "pointer"}}
          >
            {todo.text}  {todo.date}
            <button onClick={(event) => {
              event.stopPropagation(); // Event bubbling
              onDelete(todo.id)
            }}>Delete</button>
            <button onClick={(event)=>{
              event.stopPropagation();
              onMoveUp(todo.id)
            }
            }>👆</button>
            <button onClick={(event)=>{
              event.stopPropagation();
              onMoveDown(todo.id)
              }}>👇</button>
          </li>
        ))}
      </ul>
  )
}
export default TodoList;