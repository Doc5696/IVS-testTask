import React from 'react';
import './index.scss';
import { Link } from "react-router-dom";

function NavigationButton(props) {

  const buttonType = props.buttonType;

  return (
    <span className="navLink">
      {buttonType ? (
        <Link to={props.nextPage}>
          Next
        </Link>
      ) : (
        <Link to={props.prevPage}>
          Prev
        </Link>
      )}
    </span>
  );
}

export { NavigationButton };
