import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  render() {
    return (
      <div>
        <p>{ this.props.counter }</p>
        <button onClick={ this.props.increment }>+</button>
        <button onClick={ this.props.decrement }>-</button>
        <button onClick={ this.props.reset }>zerar</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { counter: state.counter }
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch({type: 'increment'}),
    decrement: () => dispatch({type: 'decrement'}),
    reset: () => dispatch({type: 'reset'}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
