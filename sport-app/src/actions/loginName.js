export const logInUser = (user) =>{
    return{
        type : 'Loggined',
        payload : user
    }
}
export const logOutUser = (nouser) =>{
    return{
        type : 'Loggouted',
        payload : nouser
    }
}