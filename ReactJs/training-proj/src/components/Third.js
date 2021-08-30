import React from 'react';
import LoginContext1 from "../Context/LoginContext";

//  useContext
const Third = () =>{
    const ctx = React.useContext(LoginContext1);
    return(
        <h2 >Hello from third {ctx}</h2>
    )
}

export default Third;