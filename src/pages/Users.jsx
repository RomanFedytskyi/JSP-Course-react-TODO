import React, { useEffect, useState } from 'react';
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { clearUsers, fetchUsers, addNewUser } from '../redux/actions/users';
import { Button } from 'antd';

function Users() {
  const userData = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  console.log('rerender');

  const { url } = useRouteMatch();

  const User = () => {
    const {id} = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
      async function fetchData() {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
  
        const json = await res.json();
        setUser(json);
      }
  
      fetchData();
    }, [id]);

    return (
      <div className="card" style={{width: '300px'}}>
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
          <h6 className="card-sub-title mb-2 text-muted">{user.email}</h6>
        </div>
      </div>
    );
  }

  const renderBtn = () => {
    // return (
    //   userData.users.length > 0 ? <button type="button" class="btn btn-danger" onClick={() => dispatch(clearUsers())}>Cleare users list</button> :
    //   <button type="button" class="btn btn-primary" onClick={() => dispatch(fetchUsers())}>Fetch users</button>
    // );
    return (
      userData.users.length > 0 ?
      <Button type="primary" onClick={() => dispatch(clearUsers())}>Cleare users list</Button> :
      <Button type="dashed" onClick={() => dispatch(fetchUsers())}>Fetch users</Button>
    );
  };

  return (
    <div className="users-page">
      <div className="list-group">
        {renderBtn()}
        {
          userData && userData.loading ?
          (<h2>...loading</h2>) :
          userData && userData.error ?
          (<h2>{userData.error}</h2>) :
          userData && userData.users && userData.users.map((user) => <div className="list-group-item users" key={user.id}>
            <Link to={`${url}/${user.id}`} className="btn btn-secondary btn-sm">{user.name}</Link>
            {user.name}
          </div>)
        }
        <button type="button" class="btn btn-secondary" onClick={() => dispatch(addNewUser({id: userData.users.length + 1, name: `user - ${userData.users.length + 1}`}))}>Add user</button>
      </div>
      <Route path="/users/:id">
        <User />
      </Route>
    </div>
  );
}

export default Users;
