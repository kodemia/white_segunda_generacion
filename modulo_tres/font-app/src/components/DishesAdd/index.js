import React, { Component } from 'react';

class DishesAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: '',
      description: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleChangeInput(e) {
    let t = e.target,
        n = t.name,
        v = t.value;
    this.setState({
      [n]: v
    });
    console.log(n,v);
  }

  handleSubmit(e) {
    e.preventDefault();
    let { name, price, description } = this.state;
    price = Number(price);
    let { token } = localStorage;
    console.log(token);
    fetch('https://fondapi.devcharles.com/dishes',{
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify({
        name,
        price,
        description
      })
    })
    .then(res => res.json())
    .then(json => console.log(json));
  }

  render() {
    let { name, price, description } = this.state;
    return(
      <div className="App-DishesAdd">
        <h1>Crear Platillo</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Nombre" value={name} name="name" onChange={this.handleChangeInput}/>
          <input type="number" placeholder="Precio" value={price} name="price" onChange={this.handleChangeInput}/>
          <input type="text" placeholder="Descripción" value={description} name="description" onChange={this.handleChangeInput}/>
          <button type="submit">Crear</button>
        </form>
      </div>
    );
  }
}

export default DishesAdd;
