import React, {useState} from 'react'

export default function ReviewFunction() {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState("nama kosong")
    const [obj, setObj] = useState({
        firstname: "ABC",
        lastname: "DEF",
        hobby: ["running", "cycling", "swimming"], 
    })

    const increment = () => {
        setCounter(prevState => prevState + 1)
    }

    const changeName = () => {
        setName("Sarah")
    }


    return (
        <div>
            <h1>
                Functional based {counter}
            </h1>
            <button onClick={increment}>+</button>
            <div>my name is {name}</div>
            <button onClick={changeName}>Ganti nama</button>
            <ol>
                {obj.hobby.map(item => (
                    <li>{item}</li>
                ))}
                
            </ol>
        </div>
    )
}
