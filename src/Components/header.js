import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

class Header extends React.Component {
  constructor() {
    super();
    this.welcomeText = true;
  }

  render() {
    this.remainingItem = 0;
    _.forEach(this.props.items, (value, key) => {
      if (!value.done) {
        this.remainingItem++;
      }
    });
    console.log(this.props.items);
    return (
      <div className="app-header mb-3">
        {this.welcomeText ? (
          <h1>What to-do?</h1>
        ) : (
          <h1>
            {this.remainingItem === 0
              ? "All done!! Good Job :)"
              : `You have ${this.remainingItem} pending task${
                  this.remainingItem > 1 ? "s" : ""
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
