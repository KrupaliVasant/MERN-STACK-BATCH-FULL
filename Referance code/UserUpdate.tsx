import React, { ChangeEvent, FormEvent } from "react";
import axios from "axios";

export default class UserUpdate extends React.Component {
  state = {
    id: 0,
    name: " ",
  };
  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ id: event.target.value });
  };
  handleChange1 = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: event.target.value });
  };
  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); //prevent browser fro auto refresh

    const user = { id: this.state.id, name: this.state.name };
    //  const myUrl = "https://jsonplaceholder.typicode.com/users/";
    //const str = myUrl + user.id;
    // console.log(str);

    fetch(`https://jsonplaceholder.typicode.com/users/${this.state.id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      body: JSON.stringify(user), // body data type must match "Content-Type" header
    }).then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
    });
    //   axios
    //     .put(`https://jsonplaceholder.typicode.com/users/${this.state.id}`, {
    //       user,
    //     })
    //     .then((res) => {
    //       console.log(res);
    //       console.log(res.data);
    //     });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Update Details</h1>
        <label>
          Person ID:
          <input type="number" name="id" onChange={this.handleChange} />
          <input type="text" name="name" onChange={this.handleChange1} />
        </label>
        <button type="submit"> Update User</button>
      </form>
    );
  }
}
