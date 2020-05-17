import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom';

class Footer extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  render() {
    return (
      <footer>
        <Link to='/add'><button>Add a song!</button></Link>
      </footer>
    )
  }
}

export default Footer