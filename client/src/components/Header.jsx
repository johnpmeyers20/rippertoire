import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header>
      <Link className='nav-item' id='header-icon' to='/'><h1>Rippertoire</h1></Link>
      {
        props.currentUser
          ?
          <>
            <p className='nav-item'>{props.currentUser.username}</p>
            <button className='nav-item' onClick={props.handleLogout}>Logout</button>
          </>
          :
          <Link className='nav-item' id='register' to="/login">Login/Register</Link>
      }
      {
        props.currentUser
        &&
        <>
          <Link className='nav-item' to="/users">Users</Link>
          <Link className='nav-item' to="/songs">Songs</Link>
        </>
      }

    </header>
  )
}
