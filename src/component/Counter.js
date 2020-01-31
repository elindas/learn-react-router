import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            number : 0
        };
    }
    
    resetNumber = () => {
        this.setState({ number: 0})
    }
    addNumber = () => {
        this.setState({ number: this.state.number + 1})
    }

    substractNumber = () => {
        if (this.state.number === 0) {
            alert("minus is not allowed")
        } else {
            this.setState({ number: this.state.number - 1 })
        }  
    }

    
    
    render() {
        return (
            <div>
                <h2>Number {this.state.number}</h2>
                <button onClick={this.addNumber}>+</button>
                <button onClick={this.substractNumber}>-</button>
                <button onClick={this.resetNumber}>Reset</button>
            </div>
        )
    }
}
