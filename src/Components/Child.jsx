import React from 'react'

const Child = ({ color }) => {
    return (
        <div>
            <p style={{ color: `${color}` }}>hi it/s working</p>
        </div>
    )
}

export default Child
