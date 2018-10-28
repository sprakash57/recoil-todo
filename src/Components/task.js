import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteTask, doneTask, editTask, updateText } from "../Actions/actions";

class Task extends React.Component {
  constructor() {
    super();
    this.input = React.createRef;
  }

  handleChange(e, id) {
    let text = e.target.value;
    this.props.updateText(text, id);
  }

  render() {
    //console.log(this.props);
    return (
      <li className="list-group-item list-item">
        {!this.props.tasks[this.props.id].editable ? (
          <p
            className="task-content"
            onClick={() => this.props.doneTask(this.props.id)}
            style={
              this.props.tasks[this.props.id].done
                ? { textDecoration: "line-through", cursor: "pointer" }
                : { textDecoration: "none", cursor: "pointer" }
            }
          >
            {this.props.tasks[this.props.id].text}
          </p>
        ) : (
          <input
            className="edit-text form-control"
            required
            type="text"
            value={this.props.task}
            onChange={e => this.handleChange(e, this.props.id)}
          />
        )}

        <button
          className="btn btn-danger ml-1"
          onClick={() => this.props.deleteTask(this.props.id)}
        >
          X
        </button>
        <button
          className="btn btn-info ml-1"
          onClick={() => this.props.editTask(this.props.id)}
        >
          {this.props.tasks[this.props.id].editable ? "\uD83D\uDCBE" : "\u270E"}
        </button>
      </li>
    );
  }
}
const mapStateToProps = state => {
  //console.log(state);
  return {
    tasks: state.tasks
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { deleteTask, doneTask, editTask, updateText },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Task);
