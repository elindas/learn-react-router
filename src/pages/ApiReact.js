import React, { Component } from 'react'
import axios from 'axios'

export default class ApiReact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            input: ""

        }
    }


    componentDidMount() {
        this.getData()
    }



    handleChange = e => {
        this.setState({ input: e.target.value })
    }

    // get data didmount, untuk update data setelah edit, delete, add
    getData = () => {
        axios.get('https://5e2fe92f9c29c900145db5c1.mockapi.io/testpost')
            .then(res => {

                console.log("this is response", res)
                // untuk validasi menampilkan data dg status 200
                if (res.status === 200) {
                    const data = res.data;
                    this.setState({ data });
                }
            })
    }

    handleSubmit = async e => {
        e.preventDefault()
        await axios.post("https://5e2fe92f9c29c900145db5c1.mockapi.io/testpost", {
            name: this.state.input
        })

        this.setState({ input: "" })

        await this.getData()

    }

    handleDelete = async id => {
        console.log('id', id)

        await axios.delete(`https://5e2fe92f9c29c900145db5c1.mockapi.io/testpost/${id}`)
        await this.getData()
    }

    handleEdit = async (id, name) => {
        console.log('id', id)
        const newName = prompt(`Edit name ${name}`)

        await axios.put(`https://5e2fe92f9c29c900145db5c1.mockapi.io/testpost/${id}`, { name: newName })
        
        await this.getData()
    }




    render() {
        console.log("state", this.state);
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Add name" onChange={this.handleChange} value={this.state.input} />
                    <button type="submit">Add</button>
                </form>

                <div className="d-flex flex-wrap bd-highlight mb-3">
                    {this.state.data.map((item, index) =>
                        <div key={index} className="p-2 bd-highlight" >
                            <div ><img src={item.avatar} alt={item.id} /></div>
                            <div >No : {item.id}</div>
                            <div >Name : {item.name}</div>
                            <div>
                                <button className="btn btn-secondary mr-2" onClick={() => this.handleEdit(item.id, item.name)} >Edit</button>

                                <button className="btn btn-success" onClick={() => this.handleDelete(item.id)}>Delete</button>
                            </div>

                        </div>
                    )}

                </div>
            </div>
        )
    }
}
