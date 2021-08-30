import React, { ChangeEvent, FormEvent } from "react";
import axios from "axios";

export default class UserAdd extends React.Component {
  state = {
    name: " ",
  };
  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: event.target.value });
  };
  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //prevent browser fro auto refresh

    const user = { name: this.state.name };
    fetch(`https://jsonplaceholder.typicode.com/users/`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      body: JSON.stringify(user), // body data type must match "Content-Type" header
    }).then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
    });

    // axios
    //   .post("https://jsonplaceholder.typicode.com/users", { user })
    //   .then((res) => {
    //     console.log(res);
    //     console.log(res.data);
    //   });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          User Name:
          <input type="text" name="name" onChange={this.handleChange} />
        </label>
        <button type="submit"> Add User</button>
      </form>
    );
  }
}
