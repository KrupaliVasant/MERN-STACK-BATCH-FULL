import React from "react";
// import { useState } from "react"


// const Login=()=>{

//     const[email,setEmail]=useState('');
//     const[password,setPassword]=useState('');

//     return(
//     <>
//         <form className='login'>
//             <label>User Name</label>
//             <input type='text' id='email' value={email} onBlur={e=>setEmail(e.target.value)} name='email' />
//             <label>Password</label>
//             <input type='password' id='password' name='password' value={password} onBlur={(e)=>setPassword(e.target.value)} />
//             <button>Login</button>
//         </form>
//     </>
//     )
// }
// export default Login;

export default class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }
    handleOnBlur = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <>
                <form className='login'>
                    <label>User Name</label>
                    <input type='text' id='email' onBlur={this.handleOnBlur} name='email' />
                    <label>Password</label>
                    <input type='password' id='password' name='password' onBlur={this.handleOnBlur} />
                    <button>Login</button>
                </form>

            </>
        )
    }
}