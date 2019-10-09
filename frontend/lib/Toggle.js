import React, { Component } from 'react';

class Toggle extends Component {
  state = {
    on: false,
  };

  toggle = () => {
    this.setState({
      on: !this.state.on,
    });
    if (this.state.on) {
      document.getElementById('__next').style.overflow = 'hidden';
      // document.body.style.top = `-${window.scrollY}px`;
    }
  };
  render() {
    const { children } = this.props;
    return children({
      on: this.state.on,
      toggle: this.toggle,
    });
  }
}

export default Toggle;
