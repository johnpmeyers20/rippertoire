import React from 'react'

function IndividualSong(props) {
  const songs = props.songs
  const currentUser = props.currentUser
  const songId = songs.filter(song => song.title === props.match.params.song).map(song => song.id)
  return (
    <div className='song-info'>
      <h2>{currentUser && props.match.params.song}</h2>
      <div>
        <button className='song-edit-button'>Edit Song</button>
        <button className='song-delete-button' onClick={() => { props.handleSongDelete(songId) }}>Delete Song</button>
      </div>
      <p>{currentUser && songs.filter(song => song.title === props.match.params.song).map(song => song.lyrics)}</p>
    </div>
  )
}

export default IndividualSong