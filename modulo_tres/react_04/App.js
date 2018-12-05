import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Componets
// import Login from './components/login/Login';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '',
        tareas: []
      }
      this.handleChangeInput = this.handleChangeInput.bind(this);
      this.handleClickAdd = this.handleClickAdd.bind(this);
    }

    handleChangeInput(event) {
      this.setState({
        value: event.target.value
      });
    }

    handleClickAdd() {
      console.log('click');
      let { tareas, value } = this.state;
      tareas.push(value);
      this.setState({
        tareas: tareas,
        value: ""
      });
    }

    render() {
      let { tareas } = this.state;
      let elements = tareas.map( (tarea,index) => {
        return <li key={index}>{tarea}</li>
      });
      return(
        <div className="App">
          <input
            type="text"
            value={ this.state.value }
            onChange={ this.handleChangeInput }
          />
          <button
            className="btn"
            onClick={ this.handleClickAdd }
          >
            Agregar
          </button>
          <h1>Tareas</h1>
          <ol>
            {elements}
          </ol>
      </div>
      );
    }
}





// class App extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         isLoggedIn: true
//       }
//       this.handleLoginClick = this.handleLoginClick.bind(this);
//     }
//
//     handleLoginClick() {
//       this.setState({
//         isLoggedIn: !this.state.isLoggedIn
//       });
//     }
//
//     render() {
//       let { isLoggedIn } = this.state;
//       let message = `${ isLoggedIn ? 'Cierra sesión' : 'Inicia sesión' }`;
//       let btnClass = `${ isLoggedIn ? 'btnLogin' : 'btnLogout' }`;
//
//       return(
//         <div className="App">
//           <h1 className={ btnClass }>{ message }</h1>
//           <button className={`btn ${btnClass}`} onClick={ this.handleLoginClick }>Click me!</button>
//         </div>
//       )
//     }
// }

  // let component;
  // let { isLoggedIn } = this.state;
  // if (isLoggedIn) {
  //   component = <Logout></Logout>;
  // } else {
  //   component = <Login></Login>;
  // }








// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoggedIn: false
//     }
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//   }
//
//   handleLoginClick() {
//     this.setState({
//       isLoggedIn: !this.state.isLoggedIn
//     })
//   }
//
//
//   render() {
//     const { isLoggedIn } = this.state;
//     let component;
//     let message = `${ isLoggedIn ? 'Hola usuario' : 'Inicia Sesión' }`;
//     let btnText = `${ isLoggedIn ? 'Logout' : 'Login' }`;
//     return (
//       <div className="App">
//         <h3>{ message }</h3>
//       <button className={ `btn btn${btnText}` } onClick={ this.handleLoginClick }>{ btnText }</button>
//       </div>
//     );
//   }
// }

export default App;
