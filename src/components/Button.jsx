import React, { Component } from 'react';

class Button extends Component {
  render() {
    // console.log(this.props);
    // console.log(this);
    const { action, name } = this.props;
    return <button onClick={action}>{name}</button>;
  }
}

export default Button;
