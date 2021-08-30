import React from 'react';
import ReactDom from 'react-dom'

export default class LifeCycleGetSnapshot extends React.Component{
    constructor(props){
        super(props);
        this.state={subject:"Maths"};
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({subject:"Science"})
        },1000)
    }
    getSnapshotBeforeUpdate(prevProps,prevState)  ///you shold include componentDidMount()
    {
        document.getElementById("Div1").innerHTML="Before the update, the favorite subject was"+prevState.subject;
        return prevState.subject;
    }
    componentDidUpdate(){
        document.getElementById("div2").innerHTML="the updated favorite subject is "+this.state.subject;
    }
    render(){
        return{}
    }
}