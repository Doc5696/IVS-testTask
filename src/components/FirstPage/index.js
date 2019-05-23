import React from 'react';
import './index.scss';
import { NavigationBlock } from '../NavigationBlock';
import { UserForm } from '../UserForm';


function FirstPage(props) {

  return (
    <section className="App-wrapper">
      <NavigationBlock nextPage="/page_2" prevPage="/page_3" />
      <h1>Page #1</h1>
      <UserForm handleInput={props.handleInput} value={props.value} handleSubmit={props.handleSubmit} />
    </section>
  );
}

export { FirstPage };
