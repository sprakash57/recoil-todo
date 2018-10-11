import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.deleteItem = this.deleteItem.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }

  addItem(e) {
    e.preventDefault();
    if (this._inputElement !== null) {
      var newNote = {
        text: this._inputElement.value,
        key: Date.now(),
        done: false
      };

      this.setState({
        items: [...this.state.items, newNote]
      });

      this._inputElement.value = "";
    }
  }

  deleteItem(key) {
    let filteredItems = this.state.items.filter(item => item.key !== key);
    this.setState({
      items: filteredItems
    });
  }

  toggleTodo(key) {
    let todos = [...this.state.items];
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].key === key) {
        todos[i].done = !todos[i].done;
      }
    }
    this.setState({
      items: todos
    });
  }

  render() {
    return (
      <div>
        <h1 style={{ color: "white", textAlign: "center" }}>
          Simple To-do App
        </h1>
        <div className="app">
          <form
            onSubmit={e => {
              this.addItem(e);
            }}
          >
            <input
              required
              placeholder="Add Task..."
              ref={e => (this._inputElement = e)}
            />
            <button type="submit">Add</button>
          </form>
          <TodoItem
            entries={this.state.items}
            deleteItem={this.deleteItem}
            toggleTodo={this.toggleTodo}
          />
        </div>
      </div>
    );
  }
}

export default TodoList;
