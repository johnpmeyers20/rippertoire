import React from 'react';
import { Link } from 'react-router-dom';
// import { addSong } from '../services/api-helper';

function CatsShow(props) {
  // console.log(props);
  const songs = props.songs
  const currentUser = props.currentUser
  return (
    <>
      <div>
        <h2>Past</h2>
        {currentUser && songs.filter(song => song.user_id === currentUser.id).map(song => (
          <React.Fragment key={song.id}>
            <Link to={`/user/${song.category_id}/${song.title}`}><h3>{song.title}</h3></Link>
          </React.Fragment>
        ))}
      </div>
      <div>
        <h2>Present</h2>
        <div className='cats-show'>
          <p>Login and all the songs that you're currently working on can be viewed here.</p>
        </div>
      </div>
      <div>
        <h2>Future</h2>
        <div className='cats-show'>
          <p>Login and all of the songs that you'd like to tackle in the future can be viewed here.</p>
        </div>
      </div>
    </>
  )
}

export default CatsShow

