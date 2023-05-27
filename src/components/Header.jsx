import React, { Component } from 'react';
import Button from './Button';

class Header extends Component {
  render() {
    return (
      <header>
        <Button action={this.props.addition} name="Add 1" />
        <Button action={this.props.deduction} name="Deduct 1" />
        <Button action={this.props.multiplication} name="Multiply by 2" />
        <Button action={this.props.division} name="Divide by 2" />
      </header>
    );
  }
}

export default Header;
