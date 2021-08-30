import './App.css';
// import Home from './components/Home';
// import AboutUs from './components/AboutUs';
// import ContactUs from './components/ContactUs';
import PropTypes from 'prop-types';
// import DemoArray from './components/DemoArray';
// import UserList from './components/UserList';
// import UserAdd from './components/UserAdd';
// import UserUpdate from './components/UserUpdate';
// import UserDelete from './components/UserDelete';
// import DemoContext from './components/DemoContext';
// import LifeCycle from './components/LifeCycle';
// import DemoUseEffect from './components/DemoUseEffect';
// import DemoForm from './components/DemoForm';
// import DemoUncontrolledForm from './components/DemoUncontrolledForm';
// import DemoUseRef from './components/DemoUseRef';

function App(props) {
  // let greet = "Welcome Back";
  // let address = "Brillio jpnagar Bengluru";
  // let username = {fname:'Kru', lname:"vasant"};
  return(
    <div className='App'>
      <h1 className="Heading">Welcome to My first react project</h1>
      {/* <Home userName={username.fname + " " + username.lname} />
      <AboutUs greet={greet} org="Brillio" />
      <ContactUs address={props.mobile} /> */}
      {/* <LifeCycle/> */}
      {/* <DemoUseEffect /> */}
      {/* <DemoForm /> */}
      {/* <DemoUncontrolledForm /> */}
      {/* <DemoUseRef/> */}
      {/* <DemoArray/> */}
      {/* <UserList /> */}
      {/* <UserAdd /> */}
      {/* <UserUpdate /> */}
      {/* <UserDelete /> */}
      {/* <DemoContext /> */}
    </div>
  );
}

// proptypes is for validated the data only  -npm i prop-types
App.propTypes={
  mobile:PropTypes.number,
  country:PropTypes.string
}

App.defaultProps={
  mobile:99876689,
  country:"India"
}

export default App;
