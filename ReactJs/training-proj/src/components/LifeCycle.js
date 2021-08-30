import React, { Component } from "react";

class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { message: "Welcome" };
        this.changeState = this.changeState.bind(this);
        console.log("constructor called" + new Date().toLocaleTimeString())
    }
    render() {
        return (
            <>
                <h1>React JS Component's LifeCycle</h1>
                <h3>Message is {this.state.message}</h3>
                <button onClick={this.changeState}>Click here</button>
            </>
        );
    }
    componentDidMount() {
        console.log("Component has MOUNTED!" + new Date().toLocaleTimeString());
        // aip call initialization
    }
    static getDerivedStateFromProps(props, state) {   //called brfore render() in mounting phase and called as the 1st method in the updating phase
        console.log("getDerivedStateFromProps called " + new Date().toLocaleTimeString());
        console.log(state.message);
        return { message: state.message };
    }
    changeState() {
        this.setState({ message: "Hi All!!" });
    }
    shouldComponentUpdate(newProps, newState) {
        return true;
    }
    componentDidUpdate(prevPeorps, prevState) {
        console.log("Component has UPDATE!" + new Date().toLocaleTimeString())
    }
    componentWillUnmount() {
        console.log("Component will UNMOUNT!" + new Date().toLocaleTimeString());
    }
}
export default LifeCycle;