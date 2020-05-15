import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Login from './Login';
import Register from './Register';
import { getAllFlavors, getAllFoods, postFood, putFood, destroyFood } from '../services/api-helper';
import ShowFlavors from './ShowFlavors';
import ShowFoods from './ShowFoods';
import CreateFood from './CreateFood';
import UpdateFood from './UpdateFood';
import FoodItem from './FoodItem';

export default class Main extends Component {
  state = {
    flavors: [],
    foods: []
  }

  componentDidMount() {
    this.readAllFlavors();
    this.readAllFoods();
  }

  readAllFlavors = async () => {
    const flavors = await getAllFlavors();
    this.setState({ flavors })
  }

  readAllFoods = async () => {
    const foods = await getAllFoods();
    this.setState({ foods })
  }

  handleFoodSubmit = async (foodData) => {
    const newFood = await postFood(foodData);
    this.setState(prevState => ({
      foods: [...prevState.foods, newFood]
    }))
  }

  handleFoodUpdate = async (id, foodData) => {
    const updatedFood = await putFood(id, foodData);
    this.setState(prevState => ({
      foods: prevState.foods.map(food => {
        return food.id === id ? updatedFood : food
      })
    }))
  }

  handleFoodDelete = async (id) => {
    await destroyFood(id);
    this.setState(prevState => ({
      foods: prevState.foods.filter(food => {
        return food.id !== id
      })
    }))
  }


  render() {
    return (
      <main>
        <Route path='/login' render={(props) => (
          <Login
            {...props}
            handleLogin={this.props.handleLogin}
          />
        )} />
        <Route path='/register' render={(props) => (
          <Register
            {...props}
            handleRegister={this.props.handleRegister}
          />
        )} />
        <Route path='/flavors' render={() => (
          <ShowFlavors
            flavors={this.state.flavors}
          />
        )} />
        <Route exact path='/foods' render={(props) => (
          <ShowFoods
            {...props}
            handleFoodDelete={this.handleFoodDelete}
            foods={this.state.foods}
          />
        )} />
        <Route path="/new/foods" render={(props) => (
          <CreateFood
            {...props}
            handleFoodSubmit={this.handleFoodSubmit}
          />
        )} />
        <Route path='/foods/:id/edit' render={(props) => {
          const { id } = props.match.params
          return <UpdateFood
            {...props}
            handleFoodUpdate={this.handleFoodUpdate}
            foodId={id}
          />
        }} />
        <Route exact path='/foods/:id' render={(props) => {
          const { id } = props.match.params
          return <FoodItem
            foodId={id}
            flavors={this.state.flavors}
          />
        }
        } />
      </main>
    )
  }
}
