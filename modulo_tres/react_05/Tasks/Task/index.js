import React, { Component } from 'react';
import './Task.css';

class Task extends Component {
  constructor(props){
    super(props);
  }

  render() {
    let { id, name, active, clickTask } = this.props;
    let isActive = active == 'si' ? 'TaskActive' : 'TaskInactive';
    return(
      <div id={id} className={`App-Task ${isActive}`} onClick={ clickTask } >
        { name }
      </div>
    )
  }
}

export default Task;
