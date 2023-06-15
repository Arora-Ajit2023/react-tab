// @ts-nocheck
import React from 'react'
import { useState } from 'react'
import ListTodo from './ListTodo'

const AddTodo = () => {
    const [data, setData] = useState([])
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        completed: false
    })

    const onInputchange = (e) => {
        const { name, value, type, checked } = e.target

        const updatedValue = type === 'checkbox' ? checked : value;

        setFormData((prevData) => {
            return (
                {
                    ...prevData,
                    [name]: updatedValue,
                }
            )
        })

    }

    const handalFormSubmit = (e) => {
        e.preventDefault();
        setData((prevData) => {
            return (
                [...prevData, formData]
            )
        })
        setFormData({
            title: '',
            description: '',
            completed: false
        })
    }

    console.log({ formData, data })
    return (
        <div>
            <form onSubmit={handalFormSubmit}>
                <div>
                    <label>
                        title:<input type='text' name='title' onChange={onInputchange} value={formData.title} />
                    </label>
                </div>
                <div>
                    <label>
                        description:<input type='text' name='description' onChange={onInputchange} value={formData.description} />
                    </label>
                </div>
                <div>
                    <label>
                        completed:<input type='checkbox' name='completed' onChange={onInputchange} checked={formData.completed} />
                    </label>
                </div>
                <button>Add</button>
            </form>
            <ListTodo data={data} />
        </div>
    )
}

export default AddTodo
