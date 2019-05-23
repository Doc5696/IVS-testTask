import React from 'react';
import { NavigationBlock } from '../NavigationBlock';
import { List } from '../List';

function SecondPage(props) {

  return (
    <section className="App-wrapper">
      <NavigationBlock nextPage="/page_3" prevPage="/page_1" />
      <h1>Page #2</h1>
      <List users={props.users} />
    </section>
  );
}

export { SecondPage };