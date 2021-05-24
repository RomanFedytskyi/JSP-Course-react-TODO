import React from 'react';
import TodoForm from '../components/TodoForm';
import Todo from '../components/Todo';

function Todos () {
  const [todos, setTodos] = React.useState([
    {text: 'learn JS'},
    {text: 'learn React'},
    {text: 'create App'}
  ]);

  const addTodo = text => {
    setTodos([...todos, {text}]);
  }

  return (
    <div className="list-group">
    {
      todos.map((todo, index) => <Todo todo={todo} key={index}/>)
    }
    <br />
    <TodoForm addTodo={addTodo}/>
  </div>
  )
}

export default Todos;