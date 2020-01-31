import React from "react";
import { useState } from "react";
import { Button } from 'reactstrap';
import './todoHooks.css';



export default function TodoHooks() {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");
    const [searchTerm, setSearchTerm] = React.useState("");

    const handleChange = event => {
        setTodo(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        let newTodos = todos;
        newTodos.push(todo);
        setTodos([...newTodos]);
        setTodo("")
    };

    let results = !searchTerm
        ? todos
        : todos.filter(person =>
            person.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        );
    
    const handleDelete = index => {
        todos.splice(index, 1)
        setTodos([...todos]);
    }

    const handleEdit = index => {
        const newTodo = prompt("Edit Todo List")
        todos.splice(index, 1, newTodo)
        setTodos([...todos]);
    }

    const handleSearch = event => {
        setSearchTerm(event.target.value);
    };



    return (
        <div>
            <h2 className="text-danger text-uppercase text-center my-4">Todo List using Hooks</h2>
            <main >
                <div className="d-flex p-2 bd-highlight justify-content-center">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={todo}
                            onChange={handleChange}
                        />
                        <button type="submit" className="btn btn-primary ml-2">Add Todo</button>
                    </form>
                </div>
                <div className="d-flex p-2 bd-highlight justify-content-center">
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    {/* <ul>
                        {results.map(item => (
                            <li>{item}</li>
                        ))}
                    </ul> */}
                </div>



                <div className="d-flex p-2 bd-highlight justify-content-center">
                    <ul style={{ width: "350px" }}>
                        {results.map((item, index) => {
                            console.log(item)
                            return (

                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between"
                                    }}
                                    key={index}
                                >

                                    <li>{item}</li>
                                    <div>
                                        <Button onClick={() => handleEdit(index)} className="btn-success mr-2 mb-2">Edit</Button>

                                        <Button onClick={() => handleDelete(index)} className="btn-danger mb-2">Delete</Button>
                                    </div>

                                </div>


                            );
                        })}
                    </ul>
                </div>
            </main>
        </div>
    );
}
