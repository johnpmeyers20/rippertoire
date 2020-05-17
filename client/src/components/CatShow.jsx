import React from 'react';
import { Link } from 'react-router-dom';
// import { addSong } from '../services/api-helper';

export default function CatShow(props) {
  // console.log(props);
  const songs = props.songs
  const currentUser = props.currentUser
  console.log(props.match.params.song)
  if (currentUser && songs.filter(song => song.category_id) === 1) {
    return (
      <>
        <div>
          <h2>Past</h2>
          {currentUser && songs.filter(song => song.user_id === currentUser.id).filter(song => song.category_id === 1).map(song => (
            <React.Fragment key={song.id}>
              <Link to={`/user/${song.category_id}/${song.title}`}><h3>{song.title}</h3></Link>
            </React.Fragment>
          ))}
        </div>
      </>
    )
  }
  else if (currentUser && songs.filter(song => song.category_id === 2)) {
    return (
      <>
        <div>
          <h2>Present</h2>
          {currentUser && songs.filter(song => song.user_id === currentUser.id).filter(song => song.category_id === 2).map(song => (
            <React.Fragment key={song.id}>
              <Link to={`/user/${song.category_id}/${song.title}`}><h3>{song.title}</h3></Link>
            </React.Fragment>
          ))}
        </div>
      </>
    )
  }
  else if (currentUser && songs.filter(song => song.category_id === 3)) {
    return (
      <>
        <div>
          <h2>Future</h2>
          {currentUser && songs.filter(song => song.user_id === currentUser.id).filter(song => song.category_id === 3).map(song => (
            <React.Fragment key={song.id}>
              <Link to={`/user/${song.category_id}/${song.title}`}><h3>{song.title}</h3></Link>
            </React.Fragment>
          ))}
        </div>
      </>
    )
  }
}
