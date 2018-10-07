import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.createTask = this.createTask.bind(this);
  }
  createTask(item) {
    return (
      <li
        className="list-group-item"
        key={item.key}
        onClick={() => this.deleteTask(item.key)}
      >
        {item.text}
      </li>
    );
  }

  deleteTask(key) {
    this.props.deleteItem(key);
  }

  render() {
    var todoEntries = this.props.entries;
    console.log(todoEntries);
    var listItems = todoEntries.map(this.createTask);
    return <ul className="list-group">{listItems}</ul>;
  }
}

export default TodoItem;
