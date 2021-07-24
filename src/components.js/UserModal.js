import { Modal, Typography, TextField, Button } from '@material-ui/core'

import React, { useState, useEffect } from 'react'

const UserModal = (props) => {
    console.log(props)
    const [showModal, setShowModal] = useState(false)
    const [password, setPassword] = useState()
    const [currentState, setCurrentState] = useState()

    const handleClick = (props) => {
        setShowModal(true)
        setCurrentState(props.user)
    }

    const handleSubmit = async () => {


        let newUser = {
            ...props.record,
            password
        }
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${newUser.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                ...newUser
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        const data = await res.json()
        alert(`Password has been set to : ${newUser.name}`)
        setPassword('')
        setShowModal(false)

    }
    const modalStyle = {
        margin: '5rem auto',
        padding: '15px',
        width: '200px',
        borderRadius: '2px',
        backgroundColor: '#f3f3f3'
    }
    const body = (
        <div style={modalStyle}>
            <Typography variant='h5'>Set Password</Typography>
            <Typography variant='body2'>Username: {props.record.username}</Typography>
            <form onSubmit={handleSubmit}>
                <TextField type='password' value={password} label='Password' onChange={(e) => setPassword(e.target.value)} />
            </form>
            <Button variant='contained' onClick={() => setShowModal(false)}>Close Modal</Button>
        </div>
    )
    return (
        <div>
            <div onClick={() => handleClick(props)}>
                <Button variant='contained' color='primary'>Set Password</Button>
            </div>
            <Modal open={showModal}>{body}</Modal>
        </div>
    )
}

export default UserModal
