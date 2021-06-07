import React from 'react';
import TodoForm from '../components/TodoForm';
import Todo from '../components/Todo';

function Todos () {
  const [todos, setTodos] = React.useState([
    {text: 'learn JS', line: true, id: 1},
    {text: 'learn React', line: false},
    {text: 'create App', line: true}
  ]);

  const addTodo = text => {
    setTodos([...todos, {text}]);
  }

  // const setLine = (id) => {
  //   setTodos(todos.map((todo) => {
  //     return todo.id === id ? {...todo, line: !todo.line} : todo
  //   }))
  // };

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