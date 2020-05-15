import React, { Component } from 'react'
import { getOneFood } from '../services/api-helper';

export default class UpdateFood extends Component {
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
    const foodItem = await getOneFood(this.props.foodId);
    this.setState({
      name: foodItem.name
    })
  }

  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.handleFoodUpdate(this.props.foodId, this.state);
        this.props.history.push('/foods');
      }}>
        <h3>Update Food</h3>
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
