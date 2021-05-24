import React from 'react';

function Todo({todo}) {
  return (<div className="list-group-item">{todo.text}</div>)
}

export default Todo;