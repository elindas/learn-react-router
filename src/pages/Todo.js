import React, { Component } from 'react'





export default class Todo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todo: "",
            list: [],
        }
    }
    handleChange = event => {
        this.setState({ todo: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()
        let { list, todo } = this.state

        list.push(todo)
        this.setState({ list: list })
    }

    handleDelete = index => {
        const { list } = this.state
        list.splice(index, 1)
        this.setState({ list: list })
    }

    handleEdit = index => {
        const { list } = this.state;
        const newTodo = prompt("Edit Todo List")

        list.splice(index, 1, newTodo)
        this.setState({ list: list })
    }



    render() {
        const { todo } = this.state

        return (
            <div>
                <h2>Todo List</h2>
                <main>
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text"
                                value={todo}
                                onChange={this.handleChange}
                            />
                            <button type="submit">Add Todo</button>
                        </form>
                    </div>

                    
                    <div>
                        <List items={this.state.list} delete={this.handleDelete} edit={this.handleEdit} />
                        {/* <ul style={{ width: "300px" }}>
                            {list.map((item, index) => {
                                return (
                                    
                                    <div style={{ display: "flex", justifyContent: "space-between" }} key={index}>


                                        <li>{item}</li>
                                        <div>
                                            <span onClick={() => this.handleEdit(index)} >Edit</span>

                                            <span onClick={() => this.handleDelete(index)}>Delete</span>

                                        </div>
                                    </div>

                                )
                            })}
                        </ul> */}
                    </div>
                </main>
            </div>
        )
    }
}

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filtered: []
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            filtered: this.props.items
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            filtered: nextProps.items
        });
    }

    handleChange(e) {
        let currentList = [];
        let newList = [];

        if (e.target.value !== "") {
            currentList = this.props.items;

            newList = currentList.filter(item => {
                const lc = item.toLowerCase();
                const filter = e.target.value.toLowerCase();
                
                return lc.includes(filter);
            });
        } else {
            newList = this.props.items;
        }
        this.setState({
            filtered: newList
        });
    }

    render() {
        return (
            <div>
                <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
                <ul>
                    {this.state.filtered.map((item, index) => (
                        <li key={item}>
                            {item} &nbsp;
                                  <span
                                className="delete"
                                onClick={() => this.props.delete(index)}
                            >Delete</span>
                            <span
                                className="edit"
                                onClick={() => this.props.edit(index)}
                            >Edit</span>
                        </li>
                    ))}
                    <br/>
                </ul>
            </div>
        )
    }
}