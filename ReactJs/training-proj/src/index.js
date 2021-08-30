import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Link, NavLink, Route, Switch, useHistory } from 'react-router-dom';
import UserList from './components/UserList';
import Welcome from './components/Welcome';
import UseHistory from './components/UseHistory';
import UserId from './components/UserId';
import DemoContext from './components/DemoContext';

const routing = (
  <Router>
    <div>
      <h1>Welcome to routing</h1>

      <li><Link to="/">Home</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
      <li><Link to="/welcome">Welcome</Link></li>
      <li><Link to="/history">Use History</Link></li>
      <li><Link to="/userlist">User List</Link></li>
      <li><Link to="/userid">User By Id</Link></li>
      <li><Link to="/context">Demo Context</Link></li>
      <li><NavLink to="/about" exact activeStyle={{ color: 'red' }}>About Us</NavLink></li>

      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route path="/contact" component={ContactUs}></Route>
        <Route path="/about" component={AboutUs}></Route>
        <Route path="/welcome" component={Welcome}></Route>
        <Route path="/userlist/:id" component={UserList}></Route>  {/* pass id in url in welcome component  */}
        <Route path="/history" component={UseHistory}></Route>
        <Route path="/userid/:id" component={UserId}></Route>
        <Route path="/context" component={DemoContext}></Route>
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

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
