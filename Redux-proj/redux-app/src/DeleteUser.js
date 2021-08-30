import React from 'react';
import {connect} from 'react-redux';

class DeleteUser extends React.Component{
    constructor(props){
        super(props);
    }
    Delete = () => { this.props.dispatch({ type: 'DELETE' }); }

    render(){
        return(
            <button onClick={this.props.Delete}>Delete User</button>
        )
    }
}

function mapStateToProps(state) {
    return {
        usercount: state.count
    };
}

const del = connect(mapStateToProps)(DeleteUser);

export default del;