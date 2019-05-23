import React from 'react';
import { NavigationBlock } from '../NavigationBlock';

function ThirdPage() {

  return (
    <section className="App-wrapper">
      <NavigationBlock
        nextPage="/page_1"
        prevPage="/page_2"
      />
      <h1>Page #3</h1>
    </section>
  );
}

export { ThirdPage };