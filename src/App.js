import React from 'react';

import Switch from './Switch';
import Card from './Card';

export default function App() {

  return (
    <div className="App">
      <h1>React context api</h1>
      <h2>Theme switch</h2>
      <Card/>
      <Switch/>
    </div>
  );
}