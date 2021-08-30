import React, { ChangeEvent, FormEvent } from "react";
import axios from "axios";

export default class UserDelete extends React.Component {
  state = {
    id: 0,
  };
  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ id: event.target.value });
  };
  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); //prevent browser from auto refresh

    const user = { id: this.state.id };
    const myUrl = "https://jsonplaceholder.typicode.com/users/";
    const str = myUrl + user.id;
    console.log(str);

    fetch(`https://jsonplaceholder.typicode.com/users/${this.state.id}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      body: JSON.stringify(user), // body data type must match "Content-Type" header
    }).then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
    });
    // axios.delete(str).then((res) => {
    //   console.log(res);
    //   console.log(res.data);
    // });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Person ID:
          <input type="number" name="id" onChange={this.handleChange} />
        </label>
        <button type="submit"> Delete User</button>
      </form>
    );
  }
}
