import React from 'react'

function IndividualSong(props) {
  const songs = props.songs
  const currentUser = props.currentUser

  return (
    <div className='song-info'>
      <h2>{currentUser && props.match.params.song}</h2>
      <button className='song-edit-button'>Edit Song</button>
      <p>{currentUser && songs.filter(song => song.title === props.match.params.song).map(song => song.lyrics)}</p>
    </div>
  )
}

export default IndividualSong