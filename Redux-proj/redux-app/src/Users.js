import React from 'react';
import { connect } from 'react-redux';
import AddUser from './AddUser';
import DeleteUser from './DeleteUser';

class Users extends React.Component {
    constructor(props) {
        super(props);
    }
    Add = () => { this.props.dispatch({ type: 'ADD' }); }

    Delete = () => { this.props.dispatch({ type: 'DELETE' }); }

    render() {
        return (
            <>
                <div>
                    <h2>Welcome to users component...</h2>
                    <div>
                        <p><label>User Count: <b>{this.props.usercount}</b></label></p>
                        <button onClick={this.Add}>Add User</button>
                        <button onClick={this.Delete}>Delete User</button>
                    </div>
                </div>
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        usercount: state.count
    };
}

const UserData = connect(mapStateToProps)(Users);

export default UserData;