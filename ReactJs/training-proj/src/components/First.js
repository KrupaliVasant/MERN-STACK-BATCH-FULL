import LoginContext1 from "../Context/LoginContext";
import React from "react";

 class First extends React.Component{
    render(){
        return(
           //  3. consumer uses the data
           <LoginContext1.Consumer>
               {value => <div>First = Login Details : {value}</div>}
           </LoginContext1.Consumer>
        )
    }
}

export default First;