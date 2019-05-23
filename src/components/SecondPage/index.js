import React from 'react';
import { NavigationBlock } from '../NavigationBlock';

function SecondPage() {

  return (
    <section className="App-wrapper">
      <NavigationBlock nextPage="/page_3" prevPage="/page_1" />
      <h1>Page #2</h1>
    </section>
  );
}

export {SecondPage};