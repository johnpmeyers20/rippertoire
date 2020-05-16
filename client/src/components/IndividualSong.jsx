import React from 'react'

function IndividualSong(props) {
  const songs = props.songs
  const currentUser = props.currentUser
  console.log(props)

  return (
    <div>
      <h2>{currentUser && props.match.params.song}</h2>
      <p>{currentUser && songs.filter(song => song.title === props.match.params.song).map(song => song.lyrics)}</p>
    </div>
  )
}

export default IndividualSong

      {/* {currentUser && songs.filter(song => song.user_id === currentUser.id).map(song => (
          <React.Fragment key={song.id}>
            <Link to={`/user/${song.category_id}/${song.title}`}><h3>{song.title}</h3></Link>
          </React.Fragment>
        ))} */}