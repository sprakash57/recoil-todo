import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  addItem(e) {
    e.preventDefault();
    //console.log(this._inputElement);
    if (this._inputElement !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };
    }
    console.log("newItem", newItem);
    this.setState(prevState => {
      //console.log("prevState", prevState.items);
      return {
        items: prevState.items.concat(newItem)
      };
    });

    this._inputElement.value = "";
    //console.log("CurrentState", this.state.items);
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(item => item.key !== key);
    this.setState({
      items: filteredItems
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.addItem}>
          <input
            placeholder="Add Task..."
            ref={e => (this._inputElement = e)}
          />
          <button type="submit">Add</button>
        </form>
        <TodoItem entries={this.state.items} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default TodoList;
