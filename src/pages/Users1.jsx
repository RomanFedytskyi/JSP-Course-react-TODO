import React, { useEffect, useState } from 'react';
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import { connect } from 'react-redux'
import { addNewUser, fetchUsers } from '../redux/actions/users';

function Users({ userData, fetchUsers, addNewUser }) {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const { url } = useRouteMatch();

  const User = () => {
    const {id} = useParams();
    const [user, setUser] = useState({});
    console.log(id, 'id');

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

  // const addUser = () => {
  //   addNewUser({
  //     id: 1111, name: "NEW USER", username: "NEW USER", email: "NEWUSER@april.biz"
  //   });
  // };

  return (
    <div className="users-page">
      <div className="list-group">
        <button onClick={() => addUser()}>Dispatch</button>
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
      </div>
      <Route path="/users/:id">
        <User />
      </Route>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    userData: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    addNewUser: (user) => dispatch(addNewUser(user))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Users);
