import React from 'react';
import { Link } from 'react-router-dom';
// import { addSong } from '../services/api-helper';

const catTitle = (categoryId) => { 
  let title;
  switch (categoryId) {
    case "1": 
      title = "Past"
      break
    case "2":
      title = "Present"
      break
    case "3":
      title = "Future"
      break
  }
  return title;
}

export default function CatShow(props) {
  const songs = props.songs
  const currentUser = props.currentUser
    return (
      <>
        <div className='categorized-list'>
          <h2>{catTitle(props.match.params.category)}</h2>
          {currentUser && songs.filter(song => song.user_id === currentUser.id).filter(song => song.category_id === parseInt(props.match.params.category)).map(song => (
            <React.Fragment key={song.id}>
              <Link to={`/user/${song.category_id}/${song.title}`}><h3>{song.title}</h3></Link>
            </React.Fragment>
          ))}
        </div>
      </>
    )
  }
//   else if (currentUser && props.match.params.category === 2) {
//     return (
//       <>
//         <div className='categorized-list'>
//           <h2>Present</h2>
//           {songs.filter(song => song.user_id === currentUser.id).filter(song => song.category_id === 2).map(song => (
//             <React.Fragment key={song.id}>
//               <Link to={`/user/${song.category_id}/${song.title}`}><h3>{song.title}</h3></Link>
//             </React.Fragment>
//           ))}
//         </div>
//       </>
//     )
//   }
//   else if (currentUser && props.match.params.category === 3) {
//     return (
//       <>
//         <div className='categorized-list'>
//           <h2>Future</h2>
//           {songs.filter(song => song.user_id === currentUser.id).filter(song => song.category_id === 3).map(song => (
//             <React.Fragment key={song.id}>
//               <Link to={`/user/${song.category_id}/${song.title}`}><h3>{song.title}</h3></Link>
//             </React.Fragment>
//           ))}
//         </div>
//       </>
//     )
//   }
// }
