import React from 'react'
import { Link } from 'react-router-dom';

export default function ShowUsers(props) {
  return (
    <div>
      <h3>Users</h3>
      {props.users.map(user => (
        <React.Fragment key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
          <button onClick={() => {
            props.history.push(`/users/${user.id}/edit`);
          }}>Edit</button>
          <button onClick={() => {
            props.handleUserDelete(user.id);
          }}>Delete</button>
          <br />
        </React.Fragment>
      ))}
      <Link to="/new/users"><button>Create</button></Link>
    </div>
  )
}




// import React from 'react'

// export default function UsersIndex(props) {
//   return (
//     <div>
//       <h3>Users list:</h3>
//       {props.users.map((user) => (
//         <p>{user.username}</p>
//       ))}
//     </div>
//   )
// }
