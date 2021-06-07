import React from 'react';
import './App.css';
import Todos from './pages/Todos';
import Users from './pages/Users';
import Home from './pages/Home';
import { BrowserRouter, Link, Route, Switch  } from "react-router-dom";
import 'antd/dist/antd.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
          <ul className="nav navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/todos">Todos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/todos">
            <Todos />
          </Route>
          <Route path="/users" component={Users} />
          <Route path="*">
            404 not found
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;




// function App() {
//   const isAdmin = true;


//   return (
//     <BrowserRouter>
//       <div className="app">
//       {isAdmin ? <AdminRoutes /> : <UsersRoutes/>}
//       </div>
//     </BrowserRouter>
//   );
// }