import React, { useState } from 'react'
import ShowFormData from './ShowFormData'

const UseStateDemo = () => {
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        password: '',
        location: ''
    })
    const handalInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({ ...prevData, [name]: value }))
    }
    const onSubmitForm = (e) => {
        e.preventDefault()
        console.log(formData)
        setFormData({
            userName: '',
            email: '',
            password: '',
            location: ''
        })
    }
    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <div style={{ margin: '1rem 0' }}>
                    <label>
                        UserName:
                        <input name='userName' onChange={handalInputChange} type='text' placeholder='Enter valid name' value={formData.userName} />
                    </label>
                </div>
                <div style={{ margin: '1rem 0' }}>
                    <label>
                        Email:
                        <input name='email' onChange={handalInputChange} type='email' placeholder='Enter valid Email' value={formData.email} />
                    </label>
                </div>
                <div style={{ margin: '1rem 0' }}>
                    <label>
                        Password:
                        <input name='password' onChange={handalInputChange} type='password' placeholder='Enter valid Password' value={formData.password} />
                    </label>
                </div>
                <div style={{ margin: '1rem 0' }}>
                    <label>
                        Location:
                        <input name='location' onChange={handalInputChange} type='text' placeholder='Enter valid location' value={formData.location} />
                    </label>
                </div>
                <button >Submit</button>
            </form>
            <ShowFormData data={formData} />
        </div>
    )
}

export default UseStateDemo
