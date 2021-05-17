import React from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = React.useState([
    {text: 'learn JS'},
    {text: 'learn React'},
    {text: 'create App'}
  ]);

  const addTodo = text => {
    setTodos([...todos, {text}]);
  }

  return (
    <div className="app">
      <div className="todo-list">
        {
          todos.map((todo, index) => <Todo todo={todo} key={index}/>)
        }
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  );
}

export default App;
