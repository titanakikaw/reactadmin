import React from "react";
import { List, Datagrid, TextField, EmailField, EditButton, UrlField } from 'react-admin';
// import { Button, Typography } from "@material-ui/core";
import PostReference from './PostReference';
import UserModal from './UserModal'
const Users = props => {

    return (
        <div>
            <List {...props} perPage='5' pagination={false}>
                <Datagrid rowClick="edit">
                    <TextField source="id" />
                    <TextField source="name" />
                    {/* <TextField source="username" /> */}
                    <EmailField source="email" />
                    {/* <TextField source="address.street" /> */}
                    <TextField source="phone" />
                    <UrlField source="website" />
                    <TextField source="company.name" />
                    <UserModal />
                    {/* <PostReference
                        source="users_id"
                        reference="users"
                        allowEmpty
                    /> */}
                </Datagrid>
            </List>
        </div>
    )
}
export default Users