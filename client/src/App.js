import React, { Component } from 'react';
import { Route } from 'react-router';
import './App.css';

import { readAllFood, readAllFlavors } from './services/api-helper';
import FoodsIndex from './components/FoodsIndex';
import FlavorsIndex from './components/FlavorsIndex';


class App extends Component {
  state = {
    foods: [],
    flavors: []
  }

  componentDidMount() {
    this.getFoods();
    this.getFlavors()
  }

  // ====================================
  // ============= Foods ================
  // ====================================

  getFoods = async () => {
    const foods = await readAllFood();
    this.setState({ foods });
  }

  // ====================================
  // ============= Flavors ==============
  // ====================================

  getFlavors = async () => {
    const flavors = await readAllFlavors();
    this.setState({ flavors });
  }

  // ====================================
  // ============= Render ===============
  // ====================================

  render() {
    return (
      <div className="App">
        <h1>Hi</h1>

        <Route path='/foods' render={() => (
          <FoodsIndex
            foods={this.state.foods}
          />
        )} />
        <Route path='/flavors' render={() => (
          <FlavorsIndex
            flavors={this.state.flavors}
          />
        )} />
      </div>
    );
  }
}

export default App;