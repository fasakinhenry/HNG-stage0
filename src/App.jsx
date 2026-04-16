import React from 'react';
import TodoItem from './components/TodoItem';

const App = () => {
  return (
    <div>
      <header class='page-header' role='banner'>
        <h1>
          Task<span>.</span>Card
        </h1>
        <p>Stage 0 — Testable Todo Component</p>
      </header>
      <TodoItem />
    </div>
  );
};

export default App;
