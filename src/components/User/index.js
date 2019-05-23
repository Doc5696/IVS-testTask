import React from 'react';

function User(props) {
  return (
    <li className="listItem">
      {props.name}
    </li>
  )
}

export {User};