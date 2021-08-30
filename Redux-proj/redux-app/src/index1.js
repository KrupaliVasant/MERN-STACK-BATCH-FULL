import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';

//action
const action = {
  type : 'changeName',
  payliad : {name:'Ved'}
}

//creating reducer
function reducer(state='Krupali',action){  //default of action is krupali
  console.log(action);
  if(action.type==='changeName'){
    return action.payliad.name;
  }
  return state;
}

//creating a redux store
const store = createStore(reducer);
console.log(store.getState());  //Krupali

//dispatch an action
store.dispatch(action);
console.log(store.getState());  //Ved



// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
