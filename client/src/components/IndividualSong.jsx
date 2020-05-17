import React from 'react'

function IndividualSong(props) {
  const songs = props.songs
  const currentUser = props.currentUser
  console.log(props)
  console.log(props.match.params.song)
  return (
    <div className='song-info'>
      <h2>{currentUser && props.match.params.song}</h2>
      <div>
        <button className='song-edit-button'>Edit Song</button>
        <button className='song-delete-button'>Delete Song</button>
      </div>
      <p>{currentUser && songs.filter(song => song.title === props.match.params.song).map(song => song.lyrics)}</p>
    </div>
  )
}

export default IndividualSong