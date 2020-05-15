import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header>
      <Link id='header-icon' to='/'><h1>Rippertoire</h1></Link>
      {
        props.currentUser
          ?
          <>
            <Link className='sign-in-out-up' onClick={props.handleLogout} to="/">Logout</Link>
          </>
          :
          <Link className='sign-in-out-up' to="/login">Login/Register</Link>
      }
      {
        props.currentUser
        &&
        <div className='list-links'>
          <Link to="/users">Users</Link>
          <Link to="/songs">Songs</Link>
          <Link to='/users/future'>Future</Link>
        </div>
      }

    </header>
  )
}
