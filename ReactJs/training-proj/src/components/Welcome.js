import React from 'react';
import { withRouter } from 'react-router';

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = { id:2 , name: "", greeting: "Hi" }
    }
    changeGreeting = () => {
        this.setState({ greeting: "Hello", name: "Panyam" })
    }
    changeUserList = () => {
        // this.props.history.push('/userlist');
        this.props.history.push(`/userlist/${this.state.id}`);  //pass id with variable 
    }
    render() {
        return (
            <>
                <h1>{this.state.greeting} {this.state.name}!!!</h1>

                <from>
                    <button type="button" onClick={this.changeGreeting}>
                        ok
                    </button>
                    <button type="button" onClick={this.changeUserList}>
                        user List
                    </button>
                </from>
            </>
        )
    }
}

export default withRouter(Welcome);