import React from 'react';
import './App.scss';
import { ListContainer } from './components/list-container';
import { CreateResult, CreateForm } from './components/create-container';

function App() {
  return (
    <div className="App">
      <ListContainer />
      <CreateResult />
      <CreateForm />
    </div>
  );
}

export default App;
