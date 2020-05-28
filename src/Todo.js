import React from "react";


function Todo({ todo, index, completeTodo, delTodo }) {
    return (
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through red" : "underline green" ,
        color: todo.isCompleted ? "red" : " green",
    }}>
      
        {todo.text}
  
        <div className="itme">
            <input className="chkbox" name="checked" type="checkbox" value="false" onChange={() => completeTodo(index)} />
          <button  className="delBTN" onClick={() => delTodo(index)}>x</button>
        </div>
      </div>
    );
  }
  export default Todo;

  // todo.isCompleted ? "true" : "false"