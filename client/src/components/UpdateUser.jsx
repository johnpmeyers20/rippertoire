import React, { Component } from 'react'
import { getOneUser } from '../services/api-helper';

export default class UpdateUser extends Component {
  state = {
    name: ""
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      name: value
    })
  }

  componentDidMount() {
    this.setFormData();
  }

  setFormData = async () => {
    const userItem = await getOneUser(this.props.userId);
    this.setState({
      name: userItem.name
    })
  }

  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.handleUserUpdate(this.props.userId, this.state);
        this.props.history.push('/users');
      }}>
        <h3>Update User</h3>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <button>Submit</button>

      </form>
    )
  }
}
