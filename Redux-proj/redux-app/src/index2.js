import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import UserData1 from './User';

const userData={
    count : 0
};

const reducer = (state=userData,action)=>{
    switch(action.type){
        case 'ADD':
            return {count:state.count+1};
        case 'DELETE':
            return {count:state.count-1};
        default:
            return state;
    }
}

const store = createStore(reducer);

const MyApp = () => (
    <Provider store={store}>
        <UserData1 />
    </Provider>
);

ReactDOM.render(<MyApp/>,document.getElementById("root"));