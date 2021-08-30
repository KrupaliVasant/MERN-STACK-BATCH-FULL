import React, {createRef} from 'react';

export default class DemoUncontrolledForm extends React.Component{
    constructor(props){
        super(props);
        // state object
        this.inputName=createRef();
        this.inputCity=createRef();
    }
    handleSubmit=(event)=>{
        alert("Hi "+ this.inputName.current.value);
        event.preventDefault();
    }
    render(){
        return(
            <>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" ref={this.inputName} />
                </label>
                <label>
                    City:
                    <input type="text" ref={this.inputCity} />
                </label>
                <input type="submit" value="Click Here" />
            </form>
            </>
        )
    }
}