import React from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';

function App() {
  return (
    <div className="App">
      <h1>Hello from App!!!</h1>
      <FirstComponent id={111} name="Krupali" />
    </div>
  );
}

export default App;
