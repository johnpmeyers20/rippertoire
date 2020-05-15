import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
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
        <Link to='/'><button>Home</button></Link>
        <Link to='/songs'><button>click me please!</button></Link>
        <Route path='/users' render={() => (
          <UsersIndex
            users={this.state.users}
          />
        )} />

        {/* <Route exact path='/' render={props => <ArticleList {...props} headlines={this.state.headlines} />} /> */}
        <Route path='/songs' render={props => <SongsIndex songs={this.state.songs} />} />
      </div>
    );
  }
}

export default App;