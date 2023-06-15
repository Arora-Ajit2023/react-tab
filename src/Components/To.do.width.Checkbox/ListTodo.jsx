// @ts-nocheck
import React from 'react'

const ListTodo = ({ data }) => {
    const [title, description, completed] = data
    return (
        <div>
            <ul>
                {data.map((item, index) => {
                    return (
                        <li key={index}>
                            <p>title:{item.title}</p>
                            <p>description:{item.description}</p>
                            {/* <label>completed <input type='checkbox' {item.completed ? 'checked' : null} /></label> */}
                            {item.completed ? 'completed' : 'not-completed'}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ListTodo
