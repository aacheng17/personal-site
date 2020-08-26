import React, { Component } from "react";

export default class SparklesButton extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event, onOff) {
    this.props.onClick(onOff);
  }

  render() {
    return (
      <div>
        <button className='Nav-link' onClick={(event) => this.handleClick(event, true)}>
          sparkles
        </button>
        <button className='Nav-link' onClick={(event) => this.handleClick(event, false)}>
          off
        </button>
      </div>
    );
  }
}