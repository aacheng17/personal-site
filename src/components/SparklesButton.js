import React, { Component } from "react";

export default class SparklesButton extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.props.onClick();
  }

  render() {
    return <button className='Nav-link' onClick={this.handleClick}>
      sparkles
    </button>
  }
}