import React from 'react';
import './index.scss';
import { User } from '../User';

function List(props) {
  const users = props.users;
  return (
    <ul className="usersList">
      {users.map(user =>
        <User name={user.name} key={user.id} />
      )}
    </ul>
  )
}

export { List };