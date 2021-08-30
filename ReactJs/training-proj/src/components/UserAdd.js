import React from "react";
import axios from "axios";

export default class UserAdd extends React.Component{
    state = {
        name: " ",
    };
    handleChange=(event)=>{
        this.setState({name:event.target.value})
    };
    handleSubmit=(event)=>{
        event.preventDefault();  //prevent browser from auto refresh 

        const user = {name:this.state.name};
        // fetch(`https://jsonplaceholder.typicode.com/users`,{
        //     method: "POST",
        //     mode: "cors",
        //     body: JSON.stringify(user),  //body data type must match "Content-type" header
        // }).then((data)=>{
        //     console.log(data);  //JSON data parse by `data.json` call 
        // });  //if status:201 it means data added successfully

        const headers = {
            'Access-Control-Allow-Origin':'*',
            'Content-Type':'application/json',
        }

        axios.post(`https://jsonplaceholder.typicode.com/users`, user, {headers:headers})
        .then((res)=>{
            console.log(res);
        })
    }

    render(){
        return(
            <>
            <form onSubmit={this.handleSubmit}>
                <label>Name:
                    <input type="text" name="name" onChange={this.handleChange} />
                </label>
                <button type="submit">Add user</button>
            </form>
            </>
        )
    }
}