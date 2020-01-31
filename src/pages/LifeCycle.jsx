import React, { Component } from 'react'
import axios from 'axios'
export default class LifeCycle extends Component {
    constructor(props) {
        super(props)
        console.log("constructor");
        this.state = {
            data: [],
            name: ""
        }
    }

    // componentDidMount() {
    //     console.log("didmount");
    //     // fetch("https://pokeapi.co/api/v2/pokemon/ditto/")
    //     //     .then(response => response.json())
    //     //     .then(data => this.setState({ data }))
    //     axios.get("https://pokeapi.co/api/v2/pokemon/ditto/")

    //         .then(response => {
    //             console.log("this is response",response)
    //             const data = response.data
    //             this.setState({ data })
    //         })
    // }

    handleChange = e => {
        this.setState({ name: e.target.value })
    }
    handleSubmit = e => {
        e.preventDefault()
        const { name } = this.state;
        axios.post("https://5e2fe92f9c29c900145db5c1.mockapi.io/testpost", { name: name })
            .then(response => {
                console.log("this is response", response)
            })
    }



    render() {
        console.log("render");
        // const { height, id, name, sprites } = this.state.data;
        const { name } = this.state

        return (
            <div>
                <h1>Life Cycle</h1>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text"
                            value={name}
                            onChange={this.handleChange}
                        />
                        <button type="submit">Add</button>
                    </form>
                </div>
            </div>
        )
    }
}
