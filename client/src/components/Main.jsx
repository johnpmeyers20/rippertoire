import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {
  getAllSongs,
  getAllUsers,
  postUser,
  updateUser,
  destroyUser,
  postSong,
  destroySong,
  updateSong
} from '../services/api-helper';

import Login from './Login';
import Register from './Register';
import CatPreview from './CatPreview';
import CatsShow from './CatsShow';
import CatShow from './CatShow';
import IndividualSong from './IndividualSong';
import AddSong from './AddSong';
import EditSong from './EditSong';

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      songs: [],
      users: [],
      isLoading: true
    }
  }

  componentDidMount() {
    this.getAllSongs();
    // this.readAllUsers();
    this.setState(prevState => {
      return {
        ...prevState,
        isLoading: !prevState.isLoading
      }
    })
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

  handleSongSubmit = async (songData) => {
    const currentUser = this.props.currentUser.id;
    const newSong = await postSong(songData, currentUser);
    this.setState(prevState => ({
      songs: [...prevState.songs, newSong]
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

  handleSongDelete = async (id) => {
    await destroySong(id);
    this.setState(prevState => ({
      songs: prevState.songs.filter(song => {
        return song.id !== parseInt(id)
      })
    }))
  }
  handleSongUpdate = async (id, songData) => {
    const updatedSong = await updateSong(songData, id);
    this.setState(prevState => ({
      songs: prevState.songs.map(song => {
        return song.id === parseInt(id) ? updatedSong : song
      })
    }))
  }

  render() {
    const loadingScreen = this.state.isLoading ?
      <div><h1>Please wait a moment while your Rippertoire loads...</h1></div> :
      <CatPreview {...this.props} currentUser={this.props.currentUser} />
    return (
      <main>
        <Route exact path='/' render={(props) => ({loadingScreen})} />
        <Route exact path='/login' render={(props) => (<Login {...props} handleLogin={this.props.handleLogin} currentUser={this.props.currentUser} />)} />
        <Route path='/register' render={(props) => (<Register {...props} handleRegister={this.props.handleRegister} />)} />
        <Route exact path='/user' render={(props) => (<CatsShow {...props} currentUser={this.props.currentUser} songs={this.state.songs} />)} />
        <Route exact path='/user/:category' render={(props) => (<CatShow {...props} currentUser={this.props.currentUser} songs={this.state.songs} />)} />
        <Route path='/user/:category/:song' render={(props) => (<IndividualSong {...props} currentUser={this.props.currentUser} songs={this.state.songs} handleSongDelete={this.handleSongDelete} />)} />
        <Route path='/add' render={(props) => (<AddSong {...props} currentUser={this.props.currentUser} songs={this.state.songs} handleSongSubmit={this.handleSongSubmit} />)} />
        <Route path='/edit/:song' render={(props) => { 
          const songId = props.match.params.song
          const song = this.state.songs.find(song => song.id === parseInt(songId))
          return <EditSong
            {...props}
            song={song}
            currentUser={this.props.currentUser}
            handleSongUpdate={this.handleSongUpdate}/>
        }}/>
      </main>
    )
  }
}