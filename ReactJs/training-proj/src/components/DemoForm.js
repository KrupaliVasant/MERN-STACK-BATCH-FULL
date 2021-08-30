import React, {Component} from 'react';
import ContactUs from './ContactUs';
import Home from './Home';

class DemoForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {uname: "", city: "",flavor:"", flag:false};
    }

    handleChange=(event)=>{
        let controlName=event.target.name;
        let controlValue=event.target.value;
        this.setState(
            {[controlName]:controlValue}
        );
    }

    handleSubmit=(event)=>{
        console.log(this.state.uname);
        console.log(this.state.city);
        console.log(this.state.flavor);
        this.setState({flag:true})
        event.preventDefault();
    }
    render(){
        let header ="";
        if(this.state.uname){
            header = <h1>Hello {this.state.uname}</h1>
        } else {
            header ="";
        }
        return(
            <>
            <form onSubmit={this.handleSubmit}>
                {header}
                <h1>Form Example</h1>
                <label>Name:</label>
                <input type="text" name="uname" value={this.state.uname} onChange={this.handleChange} />
                <br/>
                <label>City:</label>
                <input type="text" name="city" value={this.state.city} onChange={this.handleChange} />
                <br></br>
                <label>Pick your favorite icecream flavor</label>
                <br/>
                <select name="flavor" value={this.state.flavor} onChange={this.handleChange}>
                    <option value="choco">Choco</option>
                    <option value="Vanilla">Vanilla</option>
                    <option value="Butterscotch">Butterscotch</option>
                    <option value="Strawberry">Strawberry</option>
                </select>

                <input type="submit" value="Submit" />
            </form>

            {/* {this.state.flag ? "Than you" : ""}*/}
            {/* {this.state.flag ? <ContactUs /> : ""}  */}
            {this.state.flag ? <ContactUs /> : <Home />}            
            </>
        )
    }
}

export default DemoForm;