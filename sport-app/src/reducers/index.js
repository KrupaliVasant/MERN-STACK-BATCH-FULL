import { combineReducers } from "redux";
import loginReducer from "./login";
import loginUserReducer from "./loginUser";

const allReducer = combineReducers({
    login : loginReducer,
    loginUser : loginUserReducer
})

export default allReducer;