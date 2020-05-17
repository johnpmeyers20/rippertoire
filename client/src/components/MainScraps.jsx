{/* <Route path='/songs' render={() => (<SongsIndex songs={this.state.songs} />)} />
<Route exact path='/users' render={(props) => (<UsersIndex {...props} handleUserDelete={this.handleUserDelete} users={this.state.users} />)} />
<Route path="/new/users" render={(props) => (<CreateUser {...props} handleUserSubmit={this.handleUserSubmit} />)} />
<Route path='/users/:id/edit' render={(props) => {
  const { id } = props.match.params
  return <UpdateUser
    {...props}
    handleUserUpdate={this.handleUserUpdate}
    userId={id}
  />
}} />
<Route exact path='/users/:id' render={(props) => {
  const { id } = props.match.params
  return <UserItem
    userId={id}
    songs={this.state.songs}
  />
}
} /> */}

import React from 'react'
import {Link} from 'react-router-dom'

function SourceFilter(props) {
  const relevantHeadlines = props.headlines.filter(headline => headline.source.name === props.source)
  return (
    <>
      {relevantHeadlines.map(headline => {
        return (
          <>
          <h3>{props.source}</h3>
            <ul>
              <li>
                <Link to={`/source/${headline.publishedAt}`}>
                  {headline.title.slice(0, (headline.title.indexOf('-') - 1)).replace(/%/g, ' percent')}
                </Link>
              </li>
            </ul>
          </>
        )
      })}  
    </>
  )
}

export default SourceFilter
