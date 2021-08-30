const loginUserReducer = (state = 'user', action)=>{
    switch (action.type){
        case 'Loggined':
            return action.payload;
        case 'Loggouted':
            return action.payload;
        default:
            return state;
    }
}
export default loginUserReducer;