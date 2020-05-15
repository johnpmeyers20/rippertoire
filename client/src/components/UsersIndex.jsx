import React from 'react'
import { Link } from 'react-router-dom';

export default function ShowFoods(props) {
  return (
    <div>
      <h3>Foods</h3>
      {props.foods.map(food => (
        <React.Fragment key={food.id}>
          <Link to={`/foods/${food.id}`}>{food.name}</Link>
          <button onClick={() => {
            props.history.push(`/foods/${food.id}/edit`);
          }}>Edit</button>
          <button onClick={() => {
            props.handleFoodDelete(food.id);
          }}>Delete</button>
          <br />
        </React.Fragment>
      ))}
      <Link to="/new/foods"><button>Create</button></Link>
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
