// @ts-nocheck
import React, { useId, useState } from 'react'

const ToDo = () => {
    const [items, setItems] = useState([])
    const [newItem, setNewItem] = useState('')
    const addItem = () => {
        if (newItem.trim() !== '') {
            setItems([...items, newItem])
            setNewItem('')
        }
    }

    const removeItem = (index) => {
        const updatedItem = [...items]
        updatedItem.splice(index, 1)
        setItems(updatedItem)
    }

    return (
        <div>
            <ul>
                {items.map((item, index) => {
                    return (
                        <li key={index}>{item} <button onClick={() => removeItem(index)}>Remove</button></li>
                    )
                })}
            </ul>
            <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
            <button onClick={addItem}>add</button>
        </div>
    )

}

export default ToDo
