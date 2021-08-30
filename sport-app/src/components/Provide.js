import { useLocation, useParams } from "react-router-dom";
import LoginContext from "../Context/LoginContext";
import HomeUser from "./HomeUser";
import NavBar from "./Navbar";
import PlayerList from "./PlayerList";

const LoginProvider = (props) => {
    const params = useParams();
    console.log(params);

    const loc = useLocation();
    console.log(loc.state);
    const user = loc.state;

    return (
        <LoginContext.Provider value={user}>
            <NavBar/>
           <HomeUser />
        </LoginContext.Provider>
    )
}
export default LoginProvider; 