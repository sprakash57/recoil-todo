import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.createTask = this.createTask.bind(this);
  }

  createTask(item) {
    return (
      <li key={item.key}>
        <p
          style={
            item.done
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {item.text}
        </p>
        <div>
          <button onClick={() => this.handleDone(item.key)}>Done</button>
          <button>Edit</button>
          <button onClick={() => this.handleDelete(item.key)}>Delete</button>
        </div>
      </li>
    );
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
