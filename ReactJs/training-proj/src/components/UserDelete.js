import React from "react";
import axios from "axios";

export default class UserDelete extends React.Component{
    state = {
        id: 0,
    };
    handleChange=(event)=>{
        this.setState({id:event.target.value});
    };
    handleSubmit=(event)=>{
        event.preventDefault();  //prevent browser from auto refresh 

        const user = {id:this.state.id};
        // fetch(`https://jsonplaceholder.typicode.com/users/${this.state.id}`,{
        //     method: "DELETE",
        //     mode: "cors",
        //     body: JSON.stringify(user),  //body data type must match "Content-type" header
        // }).then((data)=>{
        //     console.log(data);  //JSON data parse by `data.json` call 
        // });  //if status:200 it means data deleted successfully

        const headers = {
            'Access-Control-Allow-Origin':'*',
            'Content-Type':'application/json',
        }

        axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`,user,{headers:headers})
        .then((res)=>{
            console.log(res);
        })
    }

    render(){
        return(
            <>
            <form onSubmit={this.handleSubmit}>
                <label>Id:
                    <input type="text" name="id" onChange={this.handleChange} />
                </label>
                <button type="submit">Delete user</button>
            </form>
            </>
        )
    }
}