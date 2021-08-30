import React from "react";
import axios from "axios";

export default class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { users: [] };
    }
    componentDidMount() {
        // fetch(`https://jsonplaceholder.typicode.com/users`, {  //specific method, headers body
        //     method: "GET",
        // })
        //     .then((res) => res.json())  //converting into json formate
        //     .then((res) =>
        //         this.setState({ users: res })
        //     );
        axios.get(`https://jsonplaceholder.typicode.com/users`).then((res)=>{
            this.setState({users:res.data});
            console.log(res);
        })
    }
    render() {
        console.log(this.state.users);
        console.log(this.props.match.params.id);  //consume id here
        return (
            <>
                <table border="3">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                        </tr>
                        {
                            this.state.users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address.city}</td>
                                </tr>
                            ))
                        }
                    </thead>
                </table>
            </>
        )
    }
}