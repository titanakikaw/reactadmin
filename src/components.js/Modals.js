import { Modal, Typography, TextField, Button } from '@material-ui/core'

import React, { useState, useEffect } from 'react'


const Modals = (props) => {

    //MODAL STATE
    const [showModal, setShowModal] = useState(false)
    const [password, setPassword] = useState()
    const [currentState, setCurrentState] = useState()


    //MODAL FUNCTIONS
    const handleClick = (props) => {
        setShowModal(true)
        setCurrentState(props.user)
    }

    //FORM SUBMIT
    const handleSubmit = async () => {


        let newUser = {
            ...props.user,
            password
        }
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${newUser.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                ...newUser
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        const data = await res.json()
        alert('')
        setPassword('')

    }

    //MODAL STYLE
    const modalStyle = {
        margin: '5rem auto',
        padding: '15px',
        width: '200px',
        borderRadius: '2px',
        backgroundColor: '#f3f3f3'
    }


    //ACTUAL MODAL
    const body = (
        <div style={modalStyle}>
            <Typography variant='h5'>Set Password</Typography>
            <Typography variant='body2'>Username: {props.user.id}</Typography>
            <form onSubmit={handleSubmit}>
                <TextField type='password' value={password} label='Password' onChange={(e) => setPassword(e.target.value)} />
            </form>
            <Button variant='contained' onClick={() => setShowModal(false)}>Close Modal</Button>
        </div>
    )
    return (
        <div>
            <div onClick={() => handleClick(props)}>
                set password
            </div>
            <Modal open={showModal}>{body}</Modal>
        </div>
    )
}

export default Modals

