import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import { readAllUsers, readAllSongs } from './services/api-helper';
import UsersIndex from './components/UsersIndex';
import SongsIndex from './components/SongsIndex';


class App extends Component {
  state = {
    users: [],
    songs: []
  }

  componentDidMount() {
    this.getUsers();
    this.getSongs();
  }

  // ====================================
  // ============= Users ================
  // ====================================

  getUsers = async () => {
    const users = await readAllUsers();
    this.setState({ users });
  }

  // ====================================
  // ============= Songs ==============
  // ====================================

  getSongs = async () => {
    const songs = await readAllSongs();
    this.setState({ songs });
  }

  // ====================================
  // ============= Render ===============
  // ====================================

  render() {
    return (
      <div className="App">
        <h1>Hi</h1>

        <Route path='/users' render={() => (
          <UsersIndex
            users={this.state.users}
          />
        )} />
        <Route path='/songs' render={() => (
          <SongsIndex
            songs={this.state.songs}
          />
        )} />
      </div>
    );
  }
}

export default App;