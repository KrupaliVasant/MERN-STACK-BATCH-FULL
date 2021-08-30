import axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './custom.css'

function Registration() {

    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');

    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }

    const handleChange = (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const username = document.getElementById('user-name').value;
        const email = document.getElementById('email').value;
        setName(name);
        setUserName(username);
        setEmail(email);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            name,
            userName,
            email
        };
        axios.post(`http://localhost:7000/userdata/user`, user, { headers: headers })
            .then((res) => {
                console.log(res);
                alert(`Add player successfully 
            Name:${user.name}, User Name:${user.userName}, Email: ${user.email}`);
            });
    }

    return (
        <>
            <div className="container-fluid mt-contain">
                <div className="form-center">
                    <div className="p-4 mt-3 px-5 bg-green text-dark border-radius shadow-lg animate__animated animate__zoomIn">
                        <form onSubmit={handleSubmit}>
                            <h3 className="text-color text-center mb-5 animate__animated animate__flash">SignUp Form</h3>
                            <div className="input-group mb-3">
                                <label htmlFor="name" className="input-group-text">Name:</label>
                                <input type="text" className="form-control" name="name" id="name" onChange={handleChange} />
                            </div>
                            <div className="input-group mb-3">
                                <label htmlFor="user-name" className="input-group-text">User Name:</label>
                                <input type="text" className="form-control" name="user-name" id="user-name" onChange={handleChange} />
                            </div>
                            <div className="input-group mb-3">
                                <label htmlFor="email" className="input-group-text">Email:</label>
                                <input type="email" className="form-control" name="email" id="email" onChange={handleChange} />
                            </div>
                            <div className="input-group mb-3">
                                <label htmlFor="password" className="input-group-text">Password:</label>
                                <input type="password" className="form-control" name="password" id="password" onChange={handleChange} />
                            </div>
                            <div className="input-group mb-5">
                                <label htmlFor="cpassword" className="input-group-text">Confirm Password:</label>
                                <input type="password" className="form-control" name="cpassword" id="cpassword" onChange={handleChange} />
                            </div>
                            <div className="d-grid gap-2 text-center">
                                <button type="submit" className="btn btn-success hvr-float-shadow">Register</button>
                            </div>
                            <div className="text-center mb-3 mt-4">
                                <span className="text-white me-3">Already a member?</span>
                                <NavLink to="/login" exact className="text-color text-decoration-none hvr-forward" activeClassName="text-success">LogIn</NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Registration;