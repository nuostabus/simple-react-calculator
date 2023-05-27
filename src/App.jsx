import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  state = { count: 0, customInput: '' };

  addition = () => {
    this.setState({ count: this.state.count + 1 });
  };

  deduction = () => {
    this.setState({ count: this.state.count - 1 });
  };

  multiplication = () => {
    this.setState({ count: this.state.count * 2 });
  };

  division = () => {
    this.setState({ count: Math.floor(this.state.count / 2) });
  };

  reset = () => {
    this.setState({ count: 0, customInput: 0 });
  };

  getUserInput = (e) => {
    console.log(e.target.value);
    let value = e.target.value;
    value = Number(value);
    this.updateInputValue(value);
  };

  updateInputValue = (value) => {
    this.setState({ count: value, customInput: value });
  };

  render() {
    console.log(this);
    return (
      <div>
        <h1>Simple React Calculator</h1>
        <p> Current value is: {this.state.count}</p>

        <Header
          addition={this.addition}
          deduction={this.deduction}
          multiplication={this.multiplication}
          division={this.division}
        />
        <Main
          getUserInput={this.getUserInput}
          customInput={this.state.customInput}
        />
        <Footer reset={this.reset} />
      </div>
    );
  }
}

export default App;
