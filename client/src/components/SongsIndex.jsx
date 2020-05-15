import React from 'react'

export default function SongsIndex(props) {
  return (
    <div>
      <h3>Songs list:</h3>
      {props.songs.map((song) => (
        <p>{song.title}</p>
      ))}
    </div>
  )
}
