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
    if (this._inputElement !== null) {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState(prevState => {
        //console.log("prevState", prevState.items);
        return {
          items: prevState.items.concat(newItem)
        };
      });
      this._inputElement.value = "";
    }

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
        <h1 style={{ textAlign: "center" }}>Simple To-do App</h1>
        <div className="app">
          <form className="form-inline" onSubmit={this.addItem}>
            <div className="form-group">
              <input
                required
                className="form-control textField"
                placeholder="Add Task..."
                ref={e => (this._inputElement = e)}
              />
              <button className="btn btn-primary ml-2" type="submit">
                Add
              </button>
            </div>
          </form>
          <TodoItem entries={this.state.items} deleteItem={this.deleteItem} />
        </div>
      </div>
    );
  }
}

export default TodoList;
