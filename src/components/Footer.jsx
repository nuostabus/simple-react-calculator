import React, { Component } from 'react';
import Button from './Button';

class Footer extends Component {
  render() {
    return (
      <footer>
        <Button action={this.props.reset} name="Reset" />
      </footer>
    );
  }
}

export default Footer;
