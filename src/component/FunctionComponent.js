import React from 'react'
// import ClassComponent from "./ClassComponent"



const FunctionComponent= props => {
    return (
        <div>
            <h1>Function component</h1>
            <p>Hello,,,, i am {props.age} years old. This is using variable from parent</p>
            <p>my name {props.name} this is static value </p>

            <button onClick={props.addAge}>Add age</button>
        </div>

    )
}

export default FunctionComponent;




