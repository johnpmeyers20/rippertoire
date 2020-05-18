import React, { Component } from 'react'

export default class EditSong extends Component {
  constructor(props) {
    super(props)
    this.state = {
      artist: '',
      title: '',
      user_id: '',
      lyrics: '',
      category_id: ''
    }
  }

  componentDidMount() {
    if (this.props.song) {
      this.setForm()
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.song !== this.props.song) {
      this.setForm()
    }
  }

  setForm = () => {
    const { artist, title, user_id, lyrics, category_id } = this.props.song
    this.setState({ artist, title, user_id, lyrics, category_id })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
    this.setState({ user_id: this.props.currentUser.id });
  }
  render() {
    const currentUser = this.props.currentUser
    const { artist, title, lyrics, category_id } = this.state;
    return (
      <form className='edit-song-form' onSubmit={(e) => {
        e.preventDefault();
        this.props.handleSongUpdate(this.props.song.id, this.state);
        this.props.history.push(`/user/${category_id}/${title}`);
      }}>
        <h3>Edit Song</h3>
        <div className='form-field'>
          <label htmlFor='category_id'>category:</label>
          <select
            value={category_id}
            id="category_id"
            type="number"
            name="category_id"
            autoComplete='category_id'
            onChange={this.handleChange}>
            <option>--Select a song--</option>
            <option type='number' value={1}>Past</option>
            <option type="number" value={2}>Present</option>
            <option type='number' value={3}>Future</option>
          </select>
        </div>
        <div className='form-field'>
          <label htmlFor="artist">artist:</label>
          <input
            id="artist"
            type="text"
            name="artist"
            autoComplete="artist"
            value={artist}
            onChange={this.handleChange}
          />
        </div>
        <div className='form-field'>
          <label htmlFor="title">title:</label>
          <input
            id="title"
            type="text"
            name="title"
            autoComplete="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>
            Lyrics:
            <textarea id='lyrics'
              type='lyrics'
              name='lyrics'
              autoComplete='lyrics'
              value={lyrics}
              onChange={this.handleChange} />
          </label>
        </div>
        <button>Submit</button>
      </form>
    )
  }
}