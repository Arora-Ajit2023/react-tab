import React from 'react'

const ShowFormData = ({ data }) => {
    const { userName, email, password, location } = data
    console.log(data)
    return (
        <div>
            <p>form value {userName}</p>
        </div>
    )
}

export default ShowFormData
