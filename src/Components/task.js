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
    console.log(this.props);
    return (
      <tr>
        {!this.props.tasks[this.props.id].editable ? (
          <td
            onClick={() => this.props.doneTask(this.props.id)}
            style={
              this.props.tasks[this.props.id].done
                ? { textDecoration: "line-through", cursor: "pointer" }
                : { textDecoration: "none", cursor: "pointer" }
            }
          >
            {this.props.tasks[this.props.id].text}
          </td>
        ) : (
          <td>
            <input
              required
              type="text"
              value={this.props.task}
              onChange={e => this.handleChange(e, this.props.id)}
            />
          </td>
        )}

        <td>
          <button onClick={() => this.props.deleteTask(this.props.id)}>
            Delete
          </button>
          <button onClick={() => this.props.editTask(this.props.id)}>
            {this.props.tasks[this.props.id].editable ? "Save" : "Edit"}
          </button>
        </td>
      </tr>
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
