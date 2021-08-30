import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      name:"",
      greetings:"Hi"
    }
  }

  changeGreetings=()=>{
    this.setState({greetings:"Hello",name:"Kru"})
  }

  render() {
     
    return (
      <>
      <h1>{this.state.greetings}{this.state.name}</h1>
      <button type="button" onClick={this.changeGreetings}>Change</button>
        <h2 style={{ color: "green" }}>Home</h2>
        <h3>Hi... {this.props.userName}</h3>
      </>
    );
  }
}

export default Home;