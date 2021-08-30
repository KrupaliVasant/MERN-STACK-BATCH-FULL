import React from 'react'
import { login, register, logout } from "./utils/JWTAuth.js";
import Posts from './Posts'
class App extends React.Component {

  async login(){
    let info = {
      userName: "Raghu",
      email: "rahu@email.com",
     password: "raghu123"
    };

    await login(info);

  }

  async register(){
    let info = {
      userName: "Suresh",
      last_name: "B",
      email: "suresh@email.com",
      password: "suresh123"
    };

    await register(info); 
  }
  render() {

    return (
      <div >
      <div >
        <h1>React JWT Authentication Example</h1>

        {/* <button  onClick = { this.register }>Register</button> */}

        <button  onClick = { this.login }>Log in</button>

        <button  onClick = { logout }>Log out</button>

<Posts />
      </div>
      </div>
    );
  }
}
export default App;
