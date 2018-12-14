import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// css
import './App.css';
// components
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import DishesAdd from './components/DishesAdd';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/'         exact component={ Home } />
          <Route path='/register' exact component={ Register } />
          <Route path='/login'    exact component={ Login } />
          <Route path='/dish/add' exact component={ DishesAdd } />
        </Switch>
      </div>
    );
  }
}

export default App;
