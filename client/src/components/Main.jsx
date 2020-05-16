import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Login from './Login';
import Register from './Register';
import { getAllSongs, getAllUsers, postUser, updateUser, destroyUser } from '../services/api-helper';
// import SongsIndex from './SongsIndex';
// import UsersIndex from './UsersIndex';
// import CreateUser from './CreateUser';
// import UpdateUser from './UpdateUser';
// import UserItem from './UserItem';
import CatPreview from './CatPreview';
import CatsShow from './CatsShow';
import IndividualSong from './IndividualSong';
// import CatsShow from './CatsShow';

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      songs: [],
      users: []
    }
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
        <Route exact path='/' render={(props) => (<CatPreview {...props} currentUser={this.props.currentUser}/>)} />
        <Route exact path='/login' render={(props) => (<Login {...props} handleLogin={this.props.handleLogin} currentUser={this.props.currentUser}/>)} />
        <Route path='/register' render={(props) => (<Register {...props} handleRegister={this.props.handleRegister} />)} />
        <Route path='/user' render={(props) => (<CatsShow {...props} currentUser={this.props.currentUser} songs={this.state.songs} />)} />
        <Route path='/user/:category_id/:song_title' render={(props) => (<IndividualSong {...props} currentUser={this.props.currentUser} songs={this.state.songs}/>)}/>
      </main>
    )
  }
}