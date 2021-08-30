import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import LoginContext from "../Context/LoginContext";
import { useDispatch, useSelector } from 'react-redux';
import { LogIn, LogOut } from "../actions";
import { logInUser } from "../actions/loginName";

function NavBar() {
    const ctx = React.useContext(LoginContext);

    const isLoggedin = useSelector(state => state.login);
    const loginUser = useSelector(state => state.loginUser);
    let dispatch = useDispatch();

    const history = useHistory();

    const handleSubmit = () => {
        // history.push('/home',user);
        history.push("/logoutprovide");
        console.log(history.location);
        dispatch(logInUser(ctx));
    }

    // function loginBtn(){
    //     dispatch(LogIn());
    // }

    function logoutBtn() {
        dispatch(LogOut());
        history.push("/logoutprovide");
        console.log(history.location);
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-orange bg-orange fixed-top shadow-lg">
                <div className="container">
                    <div className="collapse navbar-collapse">
                        <div className="text-end ms-auto">
                            <ul className="nav">
                                {isLoggedin ?
                                    <>
                                        <li className="me-3 mt-1">Welcome {loginUser}</li>
                                        <button className="btn btn-success" onClick={() => { isLoggedin === false ? handleSubmit() : logoutBtn() }}>{isLoggedin === false ? "Login" : "LogOut"}</button> </>
                                    :
                                    <>
                                        <li><NavLink className="btn btn-outline-light me-3 hvr-float-shadow" exact to='/login' activeClassName="btn btn-light text-dark">LogIn</NavLink></li>
                                        <li><NavLink className="btn btn-outline-light me-3 hvr-float-shadow" exact to='/registration' activeClassName="btn btn-light text-dark">SignUp</NavLink></li>
                                    </>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;