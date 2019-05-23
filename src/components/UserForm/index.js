import React from 'react';
import './index.scss';

function UserForm(props) {
  return (
    <form action="#" className="userForm">
      <input type="text" value={props.value} onChange={props.handleInput} />
      <button
        type="submit"
        onClick={props.handleSubmit}
        disabled={!props.value}
      >
        Add user
      </button>
    </form>
  )
}

export { UserForm };