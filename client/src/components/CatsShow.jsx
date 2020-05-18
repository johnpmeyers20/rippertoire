import React from 'react';
import { Link } from 'react-router-dom';
// import { addSong } from '../services/api-helper';

function CatsShow(props) {
  // console.log(props);
  const songs = props.songs
  const currentUser = props.currentUser
  return (
    <>
      <div id='past-cat-container' className='categories-element'>
        <Link to='/user/1'><h2>Past</h2></Link>
        {currentUser && songs.filter(song => song.user_id === currentUser.id).filter(song => song.category_id === 1).map(song => (
          <React.Fragment key={song.id}>
            <Link to={`/user/${song.category_id}/${song.title}`}><h3>{song.title}</h3></Link>
          </React.Fragment>
        ))}
      </div>
      <div id='present-cat-container' className='categories-element'>
        <Link to='/user/2'><h2>Present</h2></Link>
        {currentUser && songs.filter(song => song.user_id === currentUser.id).filter(song => song.category_id === 2).map(song => (
          <React.Fragment key={song.id}>
            <Link to={`/user/${song.category_id}/${song.title}`}><h3>{song.title}</h3></Link>
          </React.Fragment>
        ))}
      </div>
      <div id='future-cat-container' className='categories-element'>
        <Link to='/user/3'><h2>Future</h2></Link>
        {currentUser && songs.filter(song => song.user_id === currentUser.id).filter(song => song.category_id === 3).map(song => (
          <React.Fragment key={song.id}>
            <Link to={`/user/${song.category_id}/${song.title}`}><h3>{song.title}</h3></Link>
          </React.Fragment>
        ))}
      </div>
    </>
  )
}

export default CatsShow

