import React, { Component } from "react";

export default class SparklesButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sparkles: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event, onOff) {
    this.setState({ sparkles: onOff });
    this.props.onClick(onOff);
  }

  render() {
    return (
      <div>
        <button className='Nav-link' onClick={(event) => this.handleClick(event, true)}>
          sparkles
        </button>
        {
          this.state.sparkles ? 
          <button className='Nav-link' onClick={(event) => this.handleClick(event, false)}>
            off
          </button> : ""
        }
      </div>
    );
  }
}