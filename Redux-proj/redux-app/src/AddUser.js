import React from 'react';
import {connect} from 'react-redux'

class AddUser extends React.Component{
    constructor(props){
        super(props);
    }
    Add = () => { this.props.dispatch({ type: 'ADD' }); }

    render(){
        return(
            <button onClick={this.props.Add}>Add User</button>
        )
    }
}

function mapStateToProps(state) {
    return {
        usercount: state.count
    };
}

const add = connect(mapStateToProps)(AddUser);

export default add;
