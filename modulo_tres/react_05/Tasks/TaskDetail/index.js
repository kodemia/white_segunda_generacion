import React, { Component } from 'react';
import './TaskDetail.css';

class TasksDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.task
    }
  }

  render() {
    let { task } = this.props;
    return(
      <div className="App-TasksDetail">
        <h1>{task.name}</h1>
        <p>{ task.description }</p>
      </div>
    )
  }
}

export default TasksDetail;
