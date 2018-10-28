import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addTask, clearAll } from "../Actions/actions";

class TaskBar extends React.Component {
  constructor() {
    super();
    this.input = React.createRef;
  }
  render() {
    return (
      <form
        className="form-inline mb-3"
        onSubmit={e => {
          e.preventDefault();
          this.props.addTask(this.input.value);
          this.input.value = "";
        }}
      >
        <div className="form-group" style={{ flexGrow: "2" }}>
          <input
            className="form-control edit-text"
            required
            placeholder="Add task..."
            ref={node => (this.input = node)}
            type="text"
          />
        </div>

        <button type="submit" className="btn btn-primary ml-4">
          Add
        </button>
        <button
          type="submit"
          onClick={() => this.props.clearAll()}
          className="btn btn-primary ml-2"
        >
          Clear All
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addTask, clearAll }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(TaskBar);
