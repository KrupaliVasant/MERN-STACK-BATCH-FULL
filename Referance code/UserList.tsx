import React from "react";
import axios from "axios";
interface IState {
  users: any[];
}
export class UserList extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`, {
      //specify method,headers body
      method: "GET",
    })
      .then((res) => res.json()) // converting into json format
      .then((res) => this.setState({ users: res }));

    // axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
    //   this.setState({ users: res.data });
    //   console.log(res);
    // });
  }
  render() {
    var str = null;
    if (this.state.users) {
      console.log(this.state.users);
      str = this.state.users;
    } else {
      str = "error";
      console.log("error");
    }

    return (
      <>
        <ul>
          {this.state.users.map((user) => (
            <li>
              {user.id} ,{user.name},{user.email}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
