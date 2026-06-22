import './App.css'
import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  function handleAdd(input, dateu) {
    const newTodo = { text: input, id: Date.now(), date: dateu, completed: false};
    setTodos([...todos, newTodo]);
  }

  function handleDelete(idToRemove) {
    setTodos(todos.filter((todo) => todo.id !== idToRemove));
  }

  function handleToggle(idToToggle) {
    setTodos(
      todos.map((todo) =>
        todo.id === idToToggle ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function moveTodoUp(id){
    const index = todos.findIndex(element=> element.id === id);
    if(index > 0){
        const updatedTodos = [...todos];
        [updatedTodos[index], updatedTodos[index - 1]] = [updatedTodos[index - 1], updatedTodos[index]];
        setTodos(updatedTodos);
      }
  }

  function moveTodoDown(id){
    const index = todos.findIndex(todo=> todo.id === id);
    if(index < todos.length - 1){
        const updatedTodos = [...todos];
        [updatedTodos[index], updatedTodos[index + 1]] = [updatedTodos[index + 1], updatedTodos[index]];
        setTodos(updatedTodos);
      }
  }

  return (
    <>
      <h1>TODO APP</h1>
      <TodoForm onAdd={handleAdd}></TodoForm>
      
      <TodoList onToggle={handleToggle} onDelete={handleDelete} onMoveDown={moveTodoDown} onMoveUp={moveTodoUp} todos={todos}></TodoList>

      {todos.length !== 0 && <p className="remaining">{todos.filter((todo)=> !todo.completed).length} tasks remaining</p>}
    </>
  );
}

export default App;