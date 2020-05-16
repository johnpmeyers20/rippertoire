import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Register extends Component {
  state = {
    username: '',
    email: '',
    password: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { username, email, password } = this.state;
    return (
      <div className='register-form'>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.handleRegister(this.state);
          this.props.history.push('/');
        }}>
          <h3 className='register-title'>Register</h3>
          <div className='form-field'>
            <label htmlFor="username">username:</label>
            <input
              id="username"
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
              />
          </div>
          <div className='form-field'>
            <label htmlFor="email">email:</label>
            <input
              id="email"
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div className='form-field'>
            <label htmlFor="password">password:</label>
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
         </div>
          <button className='register-submit'>Submit</button>
        </form>
        <p>Already have an account?</p>
        <Link to='/login'>Login</Link>
      </div>
    )
  }
}


// render() {
//   const { username, email, password } = this.state;
//   return (
//     <form onSubmit={(e) => {
//       e.preventDefault();
//       this.props.handleRegister(this.state);
//       this.props.history.push('/');
//     }}>
//       <h3>Register</h3>
//       <label htmlFor="username">username:</label>
//       <input
//         id="username"
//         type="text"
//         name="username"
//         value={username}
//         onChange={this.handleChange}
//       />
//       <br />
//       <label htmlFor="email">email:</label>
//       <input
//         id="email"
//         type="text"
//         name="email"
//         value={email}
//         onChange={this.handleChange}
//       />
//       <br />
//       <label htmlFor="password">password:</label>
//       <input
//         id="password"
//         type="password"
//         name="password"
//         value={password}
//         onChange={this.handleChange}
//       />
//       <br />
//       <button>Submit</button>
//     </form>
//   )
// }