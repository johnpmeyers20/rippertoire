import React, { Component } from 'react'
import { getOneUser, addSong } from '../services/api-helper';

export default class UserItem extends Component {
  state = {
    user: null,
    song: ''
  }
  componentDidMount() {
    this.setUser()
  }

  setUser = async () => {
    const user = await getOneUser(this.props.userId);
    this.setState({ user })
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      song: value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const user = await addSong(this.state.song, this.state.user.id);
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <div>
        {
          user && (
            <>
              <h3>{user.name}</h3>
              {user.songs.map(song => (
                <p key={song.id}>{song.name}</p>
              ))}
            </>
          )
        }
        <form onSubmit={this.handleSubmit}>
          <select onChange={this.handleChange}>
            <option>--Select a song--</option>
            {this.props.songs.map(song => (
              <option value={song.id} key={song.id}>{song.name}</option>
            ))}
          </select>
          <button>Add a Song</button>
        </form>
      </div>
    )
  }
}
