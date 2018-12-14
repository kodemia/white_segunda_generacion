import React, { Component } from 'react';
import './Dish.css'

class Dish extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    let { id, name, addOrderClick } = this.props;
    return(
      <div
        id={id}
        className="App-Dish"
        data-name={name}
        onClick={addOrderClick}
      >
        <h3>{name}</h3>
      </div>
    );
  }
}

export default Dish;
