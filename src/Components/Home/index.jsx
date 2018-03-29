//Core
import React from 'react';
import { connect } from 'react-redux';
import { decrement, increment, reset } from '../../actions/counterAction';

//Instrument
import './style.css';

const Home = props => {
  // constructor(props) {
  // super(props);
  // this.props = props;
  // this.state = {
  //   count: 0,
  // };
  // }

  // addOne = props => {
  //   this.setState(prevState => {
  //     return { count: prevState.count + 1 };
  //   });
  // };

  // reset = props => {
  //   this.setState({
  //     count: 0,
  //   });
  // };
  // minusOne = props => {
  //   this.setState(prevState => {
  //     return { count: prevState.count - 1 };
  //   });
  // };

  return (
    <div>
      <h2>Home</h2>
      <p>{props.result}</p>
      <button className="btn" onClick={() => props.down(5)}>
        -
      </button>
      <button className="btn" onClick={() => props.reload()}>
        {props.result} - reset
      </button>
      <button className="btn" onClick={() => props.up(10)}>
        +
      </button>
    </div>
  );
};

//6
function mapStateToProps(state) {
  return {
    result: state.counter,
  };
}

//7
function mapDispatchToProps(dispatch) {
  return {
    up: function(step) {
      dispatch(increment(step));
    },
    down: function(step) {
      dispatch(decrement(step));
    },
    reload: function() {
      dispatch(reset());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

//up, down и reload - названия от фонаря. Назвали так, чтобы отличалось от import { decrement, increment, reset } from '../../actions/counterAction';
