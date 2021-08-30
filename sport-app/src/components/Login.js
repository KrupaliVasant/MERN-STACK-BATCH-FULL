import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../components/custom.css';
import { NavLink, useHistory } from 'react-router-dom';
import '../../node_modules/hover.css/css/hover-min.css';
import { useDispatch, useSelector } from 'react-redux';
import { LogIn, LogOut } from "../actions";
import { logInUser } from '../actions/loginName';

function Login() {
    const history = useHistory();

    const isLoggedin = useSelector(state => state.login);
    const loginUser = useSelector(state => state.loginUser);
    let dispatch = useDispatch();

    const handleSubmit=()=>{
        const name = document.getElementById('email').value;
        console.log(name)
        history.push({pathname:"/provide"});
        // history.push({pathname:"/provide", state:name });
        console.log(history.location);
        dispatch(logInUser(name));
        dispatch(LogIn());
    }

    return (
        <>
            <div className="container-fluid mt-contain">
                <div className="form-center">
                    <div className="p-4 mt-3 px-5 bg-green text-dark border-radius shadow-lg animate__animated animate__zoomIn">
                        <h3 className="text-center text-color mb-5 animate__animated animate__flash">Login</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="input-group mb-3">
                                <label htmlFro="email" className="input-group-text">Email address:</label>
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                            </div>
                            <div className="input-group mb-4">
                                <label htmlFro="password" className="input-group-text">Password:</label>
                                <input type="password" className="form-control" id="password" />
                            </div>
                            <div className="d-grid gap-2 text-center mb-5">
                                <button type="submit" className="btn btn-success hvr-float-shadow">Login</button>
                            </div>
                            <div className="text-center mb-3">
                                <span className="text-white me-3">Not a membar?</span>
                                <NavLink to="/registration" exact className="text-color text-decoration-none hvr-forward" activeClassName="text-success">SignUp now</NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <PlayerList username={loginName}/> */}
        </>
    )
}
export default Login;