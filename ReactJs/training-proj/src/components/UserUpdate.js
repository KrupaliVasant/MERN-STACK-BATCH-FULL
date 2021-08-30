import React from "react";
import axios from "axios";

export default class UserUpdate extends React.Component{
    state = {
        id: 0,
        name: " "
    };
    handleChange=(e)=>{
        this.setState({id:e.target.value});
    };
    handleChange1=(e)=>{
        this.setState({name:e.target.value});
    };
    handleSubmit=(e)=>{
        e.preventDefault();
        const user = {id:this.state.id, name:this.state.name};
        // fetch(`https://jsonplaceholder.typicode.com/users/${this.state.id}`,{
        //     method:"PUT",  //GET,POST, PUT,DELETE
        //     mode:"cors",  //no-cors, cors, same-origin
        //     body:JSON.stringify(user),
        // }).then((data)=>{
        //     console.log(data);
        // }).catch(function(){
        //     console.log("error");
        // });  //status 200 means user updated successfully

        const headers = {
            'Access-Control-Allow-Origin':'*',
            'Content-Type':'application/json',
        }
        axios.put(`https://jsonplaceholder.typicode.com/users/${this.state.id}`,user,{headers:headers})
        .then((res)=>{
            console.log(res);
        })
    }
    render(){
        return(
            <>
            <form onSubmit={this.handleSubmit}>
                <h1>Update Details</h1>
                <label>ID
                    <input type="text" name="id" onChange={this.handleChange} />
                </label>
                <label>Name
                    <input type="text" name="name" onChange={this.handleChange1} />
                </label>
                <button type="submit">Update User</button>
            </form>
            </>
        )
    }
}