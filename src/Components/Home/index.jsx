//Core
import React, { Component } from 'react';

//Instrument
import './style.css';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      count: 0,
    };
  }

  addOne = props => {
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  };

  reset = props => {
    this.setState({
      count: 0,
    });
  };
  minusOne = props => {
    this.setState(prevState => {
      return { count: prevState.count - 1 };
    });
  };

  render() {
    return (
      <div>
        <h2>Home</h2>
        <p>{this.state.count}</p>
        <button className="btn" onClick={this.addOne}>
          +
        </button>
        <button className="btn" onClick={this.reset}>
          {this.state.count} - reset
        </button>
        <button className="btn" onClick={this.minusOne}>
          -
        </button>
      </div>
    );
  }
}
