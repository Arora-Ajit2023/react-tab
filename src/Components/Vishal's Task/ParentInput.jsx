import React, { useState } from 'react'
import ChildInput from './ChildInput'

const ParentInput = () => {
    const [value, setValue] = useState(0)
    const onInputChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setValue(0);
        console.log(value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="number" placeholder='Enter Input Number' value={value} onChange={onInputChange} />
                <button>Add</button>
            </form>
            <ChildInput data={value} />
        </div>
    )
}

export default ParentInput
