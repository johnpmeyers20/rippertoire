import React from 'react'

export default function UsersIndex(props) {
  return (
    <div>
      <h3>Users list:</h3>
      {props.users.map((user) => (
        <p>{user.username}</p>
      ))}
    </div>
  )
}
