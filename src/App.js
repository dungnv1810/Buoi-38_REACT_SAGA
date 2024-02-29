import React from 'react';
import Counter from './Counter';
import TodoList from './TodoList';
import ManageUser from './ManageUser';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter/>
      <TodoList/>
      <ManageUser/>
    </div>
  );
}

export default App;
