import React, { Component } from 'react';
import './Tasks.css';
// Components
import Task from './Task';
import TaskDetail from './TaskDetail';

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskSelected: 0,
      tasks: [
        {
          'name':'First Tasks',
          'description': 'This is my first task',
          'date': 'today'
        },
        {
          'name':'Second Tasks',
          'description': 'This is my second task',
          'date': 'today'
        },
        {
          'name':'Third Tasks',
          'description': 'This is my second task',
          'date': 'today'
        },
        {
          'name':'Four Tasks',
          'description': 'This is my second task',
          'date': 'today'
        }
      ]
    }
    this.handleClickTask = this.handleClickTask.bind(this);
  }

  handleClickTask(e) {
    this.setState({
      taskSelected: e.target.id
    });
  }

  render() {
    let { tasks, taskSelected } = this.state;
    let detail = tasks[taskSelected]


    let tasksElements = tasks.map((task,i) => {
      if (taskSelected == i) {
        return <Task key={i} id={i} active="si" name={task.name} clickTask={ this.handleClickTask }></Task>;
      } else {
        return <Task key={i} id={i} active="no" name={task.name} clickTask={ this.handleClickTask }></Task>;
      }
    });
    return(
      <div className="App-Tasks">
        <div className="App-TasksList">
          <div className="TL-Header">
            <h1>Tareas</h1>
          </div>
          { tasksElements }
        </div>
        <div className="App-TaskDetail">
          <TaskDetail task={ detail }></TaskDetail>
        </div>
      </div>
    )
  }
}

export default Tasks;
