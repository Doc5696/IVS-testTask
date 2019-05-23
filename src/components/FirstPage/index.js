import React from 'react';
import './index.scss';
import {NavigationBlock} from '../NavigationBlock';

function FirstPage(props) {

  return (
    <section className="App-wrapper">
      <NavigationBlock nextPage="/page_2" prevPage="/page_3" />
      <h1>Page #1</h1>
      <input type="text" onChange={props.handleInput} />
      <button
        type="submit"
        onClick={props.handleSubmit}
      >
        Add user
      </button>
    </section>
  );
}

export {FirstPage};
