import React from "react";
import { connect } from "react-redux";
import Task from "../Components/task";

class TaskList extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.props.tasks.map((task, index) => (
            <Task key={index} task={task.text} id={index} />
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    tasks: state.tasks
  };
};

export default connect(mapStateToProps)(TaskList);
