import React, { Component } from 'react';
// class
import './Register.css'

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeInput(e) {
    let t = e.target;
    let v = t.value;
    let n = t.name;
    this.setState({
      [n]: v
    });
    console.log('=> change',t.name,t.value);
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch('https://fondapi.devcharles.com/users',{
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'email': this.state.email,
        'password': this.state.password
      })
    })
    .then( res => res.json() )
    .then( json => {
      console.log(json)
      this.setState ({
        email: '',
        password: ''
      });
      this.props.history.push('/login');
    });
  }

  render() {
    let { email, password } = this.state;
    return(
      <div className="App-Register">
        <h1>Registro</h1>
        <form onSubmit={ this.handleSubmit }>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={ this.handleChangeInput }
            value={email}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={ this.handleChangeInput }
            value={password}
          />
          <button type="submit">Crear</button>
        </form>
      </div>
    )
  }
}

export default Register;
