import React from 'react';
import logo from './logo.svg';
import './App.css';
import Topbar from './components/topbar'
import Instructions from './components/instruction'
import Game from './components/gamecontainer'

function App() {
  return (
    <div className="App">
      <Topbar />  
      <Instructions />
      <Game />
   
    </div>
  );
}

export default App;
