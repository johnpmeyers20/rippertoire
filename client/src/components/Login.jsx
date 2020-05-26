import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className='login-form'>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.handleLogin(this.state);          
          this.props.history.push(`/user`);
        }}>
          <h3 className='login-title'>Login</h3>
          <div className='form-field'>
            <label htmlFor="username">username:</label>
            <input
              id="username"
              type="text"
              name="username"
              autoComplete="username"
              value={username}
              onChange={this.handleChange}
            />
          </div>
          <div className='form-field'>
            <label htmlFor="password">password:</label>
            <input
              id="password"
              type="password"
              name="password"
              autoComplete="off"
              value={password}
              onChange={this.handleChange}
            />
          </div>
          <button className='login-submit'>Submit</button>
        </form>
        <p>Don't have an account, yet?</p>
        <Link to='/register'>Join Now</Link>
      </div>
    )
  }
}
