import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header>
      {
        props.currentUser
          ?
          <Link id='header-icon' to='/user'><h1>Rippertoire</h1></Link>
          :
          <Link id='header-icon' to='/'><h1>Rippertoire</h1></Link>
      }
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
          <Link to='/user/1'>Past</Link>
          <Link to='/user/2'>Present</Link>
          <Link to='/user/3'>Future</Link>
        </div>
      }
    </header>
  )
}
