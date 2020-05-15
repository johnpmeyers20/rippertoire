import React, { Component } from 'react'
import { getOneFood, addFlavor } from '../services/api-helper';

export default class FoodItem extends Component {
  state = {
    food: null,
    flavor: ''
  }
  componentDidMount() {
    this.setFood()
  }

  setFood = async () => {
    const food = await getOneFood(this.props.foodId);
    this.setState({ food })
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      flavor: value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const food = await addFlavor(this.state.flavor, this.state.food.id);
    this.setState({ food });
  }

  render() {
    const { food } = this.state;
    return (
      <div>
        {
          food && (
            <>
              <h3>{food.name}</h3>
              {food.flavors.map(flavor => (
                <p key={flavor.id}>{flavor.name}</p>
              ))}
            </>
          )
        }
        <form onSubmit={this.handleSubmit}>
          <select onChange={this.handleChange}>
            <option>--Select a flavor--</option>
            {this.props.flavors.map(flavor => (
              <option value={flavor.id} key={flavor.id}>{flavor.name}</option>
            ))}
          </select>
          <button>Add a Flavor</button>
        </form>
      </div>
    )
  }
}
