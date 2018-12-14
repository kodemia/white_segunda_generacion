import React, { Component } from 'react';

// class
import './Login.css';

class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: false
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
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch('https://fondapi.devcharles.com/auth/login',{
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
      console.log(json);
      let { success, payload } = json;
      if (success === false) {
        this.setState({ 'error': true });
        console.error('=> ',json.message);
      } else {
        localStorage.setItem('token',payload.token);
        this.props.history.push('/');
      }

    });
  }

  componentWillUnmount() {
    this.setState({
      email: "",
      password: "",
      error: false
    });
  }

  render() {
    let { email, password, error } = this.state;
    let isError = error ? 'input-error' : '';
    let errorMessage = error ? 'Credenciales incorrectas' : '';
    return(
      <div className="App-Login">
        <h1>Login</h1>
        <form onSubmit={ this.handleSubmit }>
          <input
            className={isError}
            type="email"
            placeholder="Email"
            name="email"
            onChange={ this.handleChangeInput }
            value={email}
          />
          <input
            className={isError}
            type="password"
            placeholder="Password"
            name="password"
            onChange={ this.handleChangeInput }
            value={password}
          />
        <h3>{ errorMessage }</h3>
        <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}

export default Login;
