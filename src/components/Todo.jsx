import React from 'react';

function Todo({todo}) {
  return (<div className="list-group-item" style={{textDecoration: todo.line ? "line-through" : ""}}>{todo.text}</div>)
}

export default Todo;