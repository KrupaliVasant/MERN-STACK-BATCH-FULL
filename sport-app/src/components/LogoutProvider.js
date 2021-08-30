import LogOutContext from "../Context/LogOutContext";
import Home from "./Home";
import NavBar from "./Navbar";

const LogOutProvider = (props) => {

    return (
        <LogOutContext.Provider value='Please Login'>
            <NavBar/>
            <Home />
        </LogOutContext.Provider>
    )
}
export default LogOutProvider; 