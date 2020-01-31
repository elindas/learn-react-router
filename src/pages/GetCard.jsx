import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function GetCard() {
    const [data, setData] = useState([])
    const [input, setInput] = useState("")
    

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios.get('https://5e2fe92f9c29c900145db5c1.mockapi.io/testpost')
            .then(res => {

                console.log("this is response", res)
                // untuk validasi menampilkan data dg status 200
                if (res.status === 200) {
                    const data = res.data;
                    setData(data)
                }
            })
    }

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = async e => {
        e.preventDefault()
        await axios.post("https://5e2fe92f9c29c900145db5c1.mockapi.io/testpost", {
            name: input
        })

        setInput("")

        await getData()
    }

    const handleDelete = async id => {
        console.log('id', id)

        await axios.delete(`https://5e2fe92f9c29c900145db5c1.mockapi.io/testpost/${id}`)
        await getData()
    }

    const handleEdit = async (id, name) => {
        console.log('id', id)
        const newName = prompt(`Edit name ${name}`)

        await axios.put(`https://5e2fe92f9c29c900145db5c1.mockapi.io/testpost/${id}`, { name: newName })

        await getData()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder="Add name" onChange={handleChange} value={input} />
                <button type="submit">Add</button>
            </form>

            <div className="d-flex flex-wrap bd-highlight mb-3">
                {data.map((item, index) =>
                    <div key={index} className="p-2 bd-highlight" >
                        <div ><img src={item.avatar} alt={item.id} /></div>
                        <div >No : {item.id}</div>
                        <div >Name : {item.name}</div>
                        <div>
                            <button className="btn btn-secondary mr-2" onClick={() => handleEdit(item.id, item.name)} >Edit</button>

                            <button className="btn btn-danger" onClick={() => handleDelete(item.id)} >Delete</button>
                        </div>

                    </div>
                )}

            </div>
          
        </div>
    )
}
