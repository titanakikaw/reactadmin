import React from 'react'
import Modals from './Modals'

const PostReference = props => {

    return (
        <div>
            <Modals user={props.record}></Modals>
        </div>
    )
}

export default PostReference
