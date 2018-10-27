import React from "react";
import { connect } from "react-redux";
import Task from "../Components/task";

class TaskList extends React.Component {
  render() {
    return (
      <div className="card">
        <ul className="list-group list-group-flush">
          {this.props.tasks.map((task, index) => (
            <Task key={index} task={task.text} id={index} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  //console.log(state);
  return {
    tasks: state.tasks
  };
};

export default connect(mapStateToProps)(TaskList);
