import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increment =()=>{
    setCount(count + 1);
  }
  const decrement =()=>{
    setCount(count - 1);
  }

  return (
    <>
    <p>{count}</p>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default App;
