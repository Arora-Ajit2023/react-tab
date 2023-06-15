import React, { useState } from 'react'

const Toggles = () => {
    const [toggle, setToggles] = useState(true)

    const OnToggle = () => {
        setToggles(!toggle)
    }

    return (
        <div>
            <button onClick={OnToggle}>{toggle ? 'hide' : 'show'}</button>
            {toggle && <p>Hii Ajit </p>}
        </div>
    )
}

export default Toggles
