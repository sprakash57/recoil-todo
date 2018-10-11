import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.createTask = this.createTask.bind(this);
    this.editSection = this.editSection.bind(this);
  }

  createTask(item) {
    return (
      <li key={item.key}>
        <React.Fragment>{this.editSection(item)}</React.Fragment>
        <div>
          <button onClick={() => this.handleDone(item.key)}>Done</button>
          <button onClick={() => this.handleEdit(item.key)}>
            {item.editSaveBtn}
          </button>
          <button onClick={() => this.handleDelete(item.key)}>Delete</button>
        </div>
      </li>
    );
  }

  editSection(item) {
    if (item.editSaveBtn === "Edit") {
      return <p style={this.markAsDoneStyle(item)}>{item.text}</p>;
    }

    return (
      <input value={item.text} onChange={() => this.handleEdit(item.key)} />
    );
  }

  handleEdit(key) {
    this.props.updateTodo(key);
  }

  markAsDoneStyle(item) {
    return item.done
      ? { textDecoration: "line-through" }
      : { textDecoration: "none" };
  }

  handleDone(key) {
    this.props.toggleTodo(key);
  }

  handleDelete(key) {
    this.props.deleteItem(key);
  }

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTask);
    return <ul>{listItems}</ul>;
  }
}

export default TodoItem;
