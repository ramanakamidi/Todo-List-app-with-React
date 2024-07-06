import React, { useState } from "react";
import './todo.css';

function Todo() {
  const [todo, setTodo] = useState([]);
  const [newtodo, setNewtodo] = useState("");

  const addTodo = () => {
    if (newtodo.trim()) {
      setTodo([...todo, { text: newtodo, completed: false }]);
      setNewtodo("");
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todo];
    newTodos.splice(index, 1);
    setTodo(newTodos);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todo];
    newTodos[index].completed = !newTodos[index].completed;
    setTodo(newTodos);
  };

  return (
    <div className="todo-container">
      <h2>Todo</h2>
      <div className="todo-inputs">
        <input
          type="text"placeholder="enter your todo"
          value={newtodo}
          onChange={(e) => setNewtodo(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todo.map((item, index) => (
          <li key={index} className={item.completed ? "completed" : ""}>
            <span onClick={() => toggleTodo(index)}>
              {item.text}
            </span>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
