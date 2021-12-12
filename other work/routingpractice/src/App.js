import React from 'react';
import './App.css';
import {Router} from '@reach/router'
import Home from './components/Home';
import Display from './components/Display';
import DisplayColor from './components/DisplayColor';

function App() {
  return (
    <div className="App">
     <Router>
    <Home path="/home"/>
    <Display path="/:intOrWord"/>
    <DisplayColor path= "/:word/:fontColor/:backgroundColor"/>
     </Router>
    </div>
  );
}

export default App;
