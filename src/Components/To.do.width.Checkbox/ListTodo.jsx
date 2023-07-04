// @ts-nocheck
import React from 'react'

const ListTodo = ({ data }) => {
    const [title, description, completed, id] = data
    const removeEl = (index) => {
        data.splice(index, 1)
    }
    return (
        <div>
            <ul>
                {data.map((item, index) => {
                    return (
                        <li key={index}>
                            <p>title:{item.title}</p>
                            <p>description:{item.description}</p>
                            {item.completed ? 'completed' : 'not-completed'}
                            <button onClick={removeEl(index)}>remove</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ListTodo
