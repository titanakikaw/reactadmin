import React from 'react'
import {
    Edit,
    DateInput,
    LongTextInput,
    SimpleForm,
    required
} from 'react-admin';
import { List, Datagrid, TextField, ReferenceField, EditButton } from 'react-admin';
import PostReference from './PostReference';

const Posts = props => {
    return (
        <List {...props} perPage='5' pagination={false}>
            <Datagrid>
                <TextField source="id" />
                <ReferenceField source="userId" reference="users">
                    <TextField source="name" />
                </ReferenceField>
                <TextField source="title" />
                {/* <TextField source="body" /> */}
                <EditButton />
                <PostReference
                    source="post_id"
                    reference="posts"
                    allowEmpty
                />
            </Datagrid>
        </List>
    )
}

export default Posts
