import React, { useState } from 'react'
import Child from './Child'

const ParentToChildProp = () => {
    const [color, setColor] = useState('red')
    const handalColorChange = (e) => {
        setColor(e.target.name)
    }
    return (
        <div>
            <p>Click on buttons to change child component text color</p>
            <button onClick={handalColorChange} name='Green'>Change to Green</button>
            <button onClick={handalColorChange} name='black'>Change to black</button>
            <button onClick={handalColorChange} name='blue'>Change to blue</button>
            <button onClick={handalColorChange} name='Grey'>Change to Grey</button>
            <Child color={color} />
        </div>
    )
}

export default ParentToChildProp
