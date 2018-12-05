import React, { Component } from 'react';

// css
import './Chronometer.css';

class Chronometer extends Component {
  constructor(props) {
    super(props);
    let { init } = props
    this.state = {
      counter: init
    }
  }

  componentDidMount() {
    this.chronometer = setInterval(() => {
      this.increase();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.chronometer);
  }

  increase() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return(
      <h1>Cronometro: { this.state.counter }</h1>
    );
  }

}

export default Chronometer;
