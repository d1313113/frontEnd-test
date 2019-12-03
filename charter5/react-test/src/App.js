import React from 'react';
import TodoList from './containers/TodoList/index';

function App() {
  return (
    <div className="App" title="cumelmell" data-test="App">
      <header className="App-header">
        <TodoList />
      </header>
    </div>
  );
}

export default App;
