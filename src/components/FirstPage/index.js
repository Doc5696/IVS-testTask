import React from 'react';
import './index.scss';
import {NavigationBlock} from '../NavigationBlock';

function FirstPage() {

  return (
    <section className="App-wrapper">
      <NavigationBlock nextPage="/page_2" prevPage="/page_3" />
      <h1>Page #1</h1>
    </section>
  );
}

export {FirstPage};
