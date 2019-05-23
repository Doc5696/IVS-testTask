import React from 'react';
import './index.scss';
import {NavigationButton} from '../NavigationButton';

function NavigationBlock(props) {
  return (
    <div className="navBlock">
      <div className="navButtons">
        <NavigationButton prevPage={props.prevPage} buttonType={false} />
        <NavigationButton nextPage={props.nextPage} buttonType={true} />
      </div>
    </div>
  );
}

export {NavigationBlock};
