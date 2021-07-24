import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
} from 'react-admin';

export const PostList = props => (
    { /* ... */ }
);


const PostEdit = props => (
    <>{console.log(props)}</>
    // <Edit {...props}>
    //     <SimpleForm>
    //         <TextInput disabled source="id" />
    //         <ReferenceInput source="userId" reference="users">
    //             <SelectInput optionText="name" />
    //         </ReferenceInput>
    //         <TextInput source="title" />
    //         <TextInput multiline source="body" />
    //     </SimpleForm>
    // </Edit>
);
export default PostEdit