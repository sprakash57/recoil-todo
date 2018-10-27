import React from "react";
import { connect } from "react-redux";

class Header extends React.Component {
  constructor() {
    super();
    this.welcomeText = true;
  }
  // componentWillMount() {
  //   console.log("Will");
  //   this.welcomeText = true;
  //   console.log(this.welcomeText);
  // }

  render() {
    console.log(this.welcomeText);
    return (
      <div className="app-header mb-3">
        {this.welcomeText ? (
          <h1>What to-do?</h1>
        ) : (
          <h1>
            {this.props.items.length === 0
              ? "All done!! Good Job :)"
              : `You have ${this.props.items.length} pending task${
                  this.props.items.length > 1 ? "s" : ""
                }`}
          </h1>
        )}
        {(this.welcomeText = false)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.tasks
  };
};

export default connect(mapStateToProps)(Header);
