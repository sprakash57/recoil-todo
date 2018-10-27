import React, { Component } from "react";
import Header from "./Components/header";
import Taskbar from "./Components/taskBar";
import Tasklist from "./Components/taskList";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Taskbar />
        <Tasklist />
      </div>
    );
  }
}

export default App;
