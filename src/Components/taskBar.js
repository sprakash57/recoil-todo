import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addTask } from "../Actions/actions";

class TaskBar extends React.Component {
  constructor() {
    super();
    this.input = React.createRef;
  }
  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.addTask(this.input.value);
            this.input.value = "";
          }}
        >
          <input
            required
            placeholder="add task"
            ref={node => (this.input = node)}
            type="text"
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addTask }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(TaskBar);
