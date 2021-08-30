import { Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import HomeUser from "./components/HomeUser";
import Login from "./components/Login";
import Registration from "./components/Registration";
import PlayerList from "./components/PlayerList";
import PlayerById from "./components/PlayerById";
import PlayerUpdate from "./components/PlayerUpdate";
import PlayerDelete from "./components/PlayerDelete";
import LoginProvider from "./components/Provide";
import LogOutProvider from "./components/LogoutProvider";
import ProductGet from "./components/product/productGet";
import ProductPost from "./components/product/productPost";
import UserList from "./components/UserList";
// import UserNav from './components/UserNav';

function RouteHandler() {
  return (
    <>
      <div className="nav-links">
        <NavBar />
      </div>

      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/homeUser" exact component={HomeUser}></Route>
        <Route path="/playerlist" exact component={PlayerList}></Route>
        <Route path="/userlist" exact component={UserList}></Route>
        <Route path="/playerlistbyid" exact component={PlayerById}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/registration" exact component={Registration}></Route>
        <Route path="/playerupdate/:id" component={PlayerUpdate}></Route>
        <Route path="/playerdelete" component={PlayerDelete}></Route>
        <Route path="/provide" component={LoginProvider}></Route>
        <Route path="/logoutprovide" component={LogOutProvider}></Route>
        <Route path="/productget" component={ProductGet}></Route>
        <Route path="/productpost" component={ProductPost}></Route>
      </Switch>
    </>
  );
}
export default RouteHandler;
