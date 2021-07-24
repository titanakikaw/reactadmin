import React from 'react'
import { Admin, EditGuesser, ListGuesser, Resource } from 'react-admin';
import Users from './components.js/Users'
import jsonServerProvider from 'ra-data-json-server';
import Posts from './components.js/Posts';
import EditPost from './components.js/EditPost'
import CreatePost from './components.js/CreatePost'

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => {

  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="users" list={Users} />
      <Resource name="posts" list={Posts} edit={EditPost} create={CreatePost} />
    </Admin>
  )
}

export default App
