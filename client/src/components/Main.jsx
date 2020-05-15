import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Login from './Login';
import Register from './Register';
import { getAllSongs, getAllUsers, postUser, updateUser, destroyUser } from '../services/api-helper';
import SongsIndex from './SongsIndex';
import UsersIndex from './UsersIndex';
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';
import UserItem from './UserItem';

export default class Main extends Component {
  state = {
    songs: [],
    users: []
  }

  componentDidMount() {
    this.getAllSongs();
    this.readAllUsers();
  }

  getAllSongs = async () => {
    const songs = await getAllSongs();
    this.setState({ songs })
  }

  readAllUsers = async () => {
    const users = await getAllUsers();
    this.setState({ users })
  }

  handleUserSubmit = async (userData) => {
    const newUser = await postUser(userData);
    this.setState(prevState => ({
      users: [...prevState.users, newUser]
    }))
  }

  handleUserUpdate = async (id, userData) => {
    const updatedUser = await updateUser(id, userData);
    this.setState(prevState => ({
      users: prevState.users.map(user => {
        return user.id === id ? updatedUser : user
      })
    }))
  }

  handleUserDelete = async (id) => {
    await destroyUser(id);
    this.setState(prevState => ({
      users: prevState.users.filter(user => {
        return user.id !== id
      })
    }))
  }


  render() {
    return (
      <main>
        <Route path='/login' render={(props) => (
          <Login
            {...props}
            handleLogin={this.props.handleLogin}
          />
        )} />
        <Route path='/register' render={(props) => (
          <Register
            {...props}
            handleRegister={this.props.handleRegister}
          />
        )} />
        <Route path='/songs' render={() => (
          <SongsIndex
            songs={this.state.songs}
          />
        )} />
        <Route exact path='/users' render={(props) => (
          <UsersIndex
            {...props}
            handleUserDelete={this.handleUserDelete}
            users={this.state.users}
          />
        )} />
        <Route path="/new/users" render={(props) => (
          <CreateUser
            {...props}
            handleUserSubmit={this.handleUserSubmit}
          />
        )} />
        <Route path='/users/:id/edit' render={(props) => {
          const { id } = props.match.params
          return <UpdateUser
            {...props}
            handleUserUpdate={this.handleUserUpdate}
            userId={id}
          />
        }} />
        <Route exact path='/users/:id' render={(props) => {
          const { id } = props.match.params
          return <UserItem
            userId={id}
            songs={this.state.songs}
          />
        }
        } />
      </main>
    )
  }
}
