import React, { Component } from "react";
import LoginContext1 from "../Context/LoginContext";
import First from "./First";
import Second from "./Second";

// 1. create context, return producer ,consumer
// const LoginContext  = createContext("Admin");
 export default class DemoContext extends Component{
     render(){
         return(
            //  2. producer provides the data
             <LoginContext1.Provider value="Krupali">
                 <h1>Contex Demo</h1>
                 <First />
                 <Second />   {/* list of components */}
             </LoginContext1.Provider>
         )
     }
 }

