import React, { Component } from 'react'
import FunctionComponent from "./FunctionComponent"
import { Button } from 'reactstrap';
// import { Button, ButtonGroup } from 'reactstrap';


class ClassComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Sarah",
            age: 20,
            days: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
            ],        
        };
    }

    changeName = () => {
        // console.log('masuk');
        this.setState({ name: "Thoriq" })

    }

    addAge = () => {
        this.setState({ age: this.state.age + 1})
    }

    render() {
        const isLogin = true;

        return (
            < div >
                <h2>Hello my name is {this.state.name}.
               I am {this.state.age} years old
                         
                </h2>
                <Button onClick={this.changeName} outline color="success">Ubah nama</Button>{' '}

                <div>
                    <button onClick={this.addAge}>+</button>
                
                    <button onClick={() => {
                        this.setState({ age: this.state.age - 1})
                    }}>-</button>
                </div>
                <FunctionComponent age={this.state.age} addAge={this.addAge} name={"andi"} />
                
                <ul>
                    {this.state.days.map((day, index) => {
                        return <li key={index}>{day}</li>
                    })}
                </ul>
                {isLogin?<p>You are login</p>:<p>Login first</p>}

            </div >
        )
    }
}

export default ClassComponent
