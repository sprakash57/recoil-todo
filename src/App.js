import React, { Component } from "react";
import Header from "./Components/header";
import Taskbar from "./Components/taskBar";
import Tasklist from "./Components/taskList";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Taskbar />
        <Tasklist />
      </div>
    );
  }
}

export default App;
