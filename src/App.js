import React, { useState } from "react";

import Todo from "./Todo"
import TodoForm from "./TodoForm"

import "./App.css";


function App() {

  const [todos, setTodos] = useState([
    {
      text: "item 1",
      isCompleted: false
    },
    {
      text: "item 2",
      isCompleted: false
    },
    {
      text: "item 3",
      isCompleted: false
    }
  ]);
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];

    const chkd = newTodos[index].isCompleted;
    // eslint-disable-next-line default-case
    switch (chkd) {
      case false:
           newTodos[index].isCompleted = true;
          break;
  
      case true:
        newTodos[index].isCompleted = false;
          break;

      case undefined:
          newTodos[index].isCompleted = true;
              break;

          default:

  };
    setTodos(newTodos);
  };

  const delTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h2 id="topLogo" class="topLogo" >TODO - IDEAS</h2>
      <div className="todo-list">

        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            delTodo={delTodo}
          />

        ))}

        <TodoForm addTodo={addTodo} />

      </div>
    </div>
  );
}

export default App;
