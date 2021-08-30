import React from 'react';
import { connect } from 'react-redux';
import AddUser from './AddUser';
import DeleteUser from './DeleteUser';

class User extends React.Component{
    constructor(props){
        super(props);
    }
render(){
        return (
            <>
                <div>
                    <h2>Welcome to users component...</h2>
                    <div>
                        <p><label>User Count: <b>{this.props.usercount}</b></label></p>
                        <AddUser/>
                        <DeleteUser/>
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

const UserData1 = connect(mapStateToProps)(User);

export default UserData1;