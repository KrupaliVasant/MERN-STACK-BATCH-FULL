import React from "react";

interface UserDetails {  //interface used in typescript
    id: number,
    name: string
}

export default class FirstComponent extends React.Component<UserDetails, {}>
                                                        //<props,state>
{
    constructor(props: UserDetails) {
        super(props);
    }
    render() {
        return (
            <>
                <h1>Hey!!! From first Component</h1>
                <h4>User ID: {this.props.id}</h4>
                <h4>User Name: {this.props.name}</h4>
            </>
        )
    }
}