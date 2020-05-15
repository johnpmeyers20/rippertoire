import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header>
      <Link to='/'><button>Home</button></Link>
      <h1>Rippertoire</h1>
      {
        props.currentUser
          ?
          <>
            <p>{props.currentUser.username}</p>
            <button onClick={props.handleLogout}>Logout</button>
          </>
          :
          <Link to="/login">Login/Register</Link>
      }
      {
        props.currentUser
        &&
        <>
          <Link to="/users">Users</Link>
          <Link to="/songs">Songs</Link>
        </>
      }

    </header>
  )
}
