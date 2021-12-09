import React from 'react';
import {Router} from '@reach/router';
import Main from './views/Main';
import OneProduct from './views/OneProduct';
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Main path= "/"/>
        <OneProduct path= "/:_id"/>
      </Router>
    </div>
  );
}

export default App;
