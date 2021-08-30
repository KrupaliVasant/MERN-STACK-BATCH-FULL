const loginReducer = (state = true, action) => {
    switch(action.type) {
        case 'Login' :
            return true;
        case 'Logout' :
            return false;
        default:
            return false;
    }
}

export default loginReducer;