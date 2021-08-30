import React, { useEffect, useState } from 'react';

// function hook, useEffect()
// useEffect() is equivalent of componentDidMount(), componentDidUpdate(), componentWillUnmount()

function DemoUseEffect() {
    const [projectName, setProjectName] = useState("React Project");
    const [teamSize, setTeamSize] = useState(5);

    const changeProjectName = (event) => { setProjectName(event.target.value) }
    const changeTeamSize = (event) => { setTeamSize(event.target.value) }

    useEffect(() => { console.log("Hello everyone,called eveytime") });  //only 1 paramater, it is called everytime

    // similar to componentDidMount()
    useEffect(() => { 
        console.log("Called only once")
connectApi();
    }, []);  //if 2nd parameter is an empty array, useEffect is called only once

    // useEffect() is similar to componentDidUpdate(), is called whenever there is change in teamSize
    useEffect(() => {
        console.log("called whenever there is a change in the teamSize");
        // updateapi()
    }, [teamSize]);

    // useEffect() is similar to componentWillUnmount()
    useEffect(() => {
        console.log("subscribing api");  //it executes once

        return () => {
            console.log("Bye Bye!!");   //unmount when the compoent is remove from app.js 
            // closeconnection()
        }
    }, []);

    const connectServer=()=>{
        // server name, port initialization
        console.log("server connectivity")
    };

    const connectApi=()=>{
        console.log("Restful API call");
        // fetch -> get / axio.get()
    }

    return (
        <>
            <input type="text" value={projectName} onChange={changeProjectName} />
            <input type="text" value={teamSize} onChange={changeTeamSize} />
            <p>{projectName}</p>
            <p>{teamSize}</p>
        </>
    )
}

export default DemoUseEffect;