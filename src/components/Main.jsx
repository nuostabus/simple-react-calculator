import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <div>
        <div>Change the starting value</div>
        <input
          type="text"
          placeholder="Enter your value"
          name="myInput"
          onInput={this.props.getUserInput}
          value={this.props.customInput}
        />
      </div>
    );
  }
}

export default Main;
