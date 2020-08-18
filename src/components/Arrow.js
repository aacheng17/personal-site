import React, { Component } from "react";
import "./style/Arrow.css";

export default class Arrow extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.props.onClick(this.props.direction);
  }

  render() {
    return <button onClick={this.handleClick}>
      <h2 style={{ marginTop:'27px' }}>
        {this.props.direction === 1 ? `${this.props.text} >` : `< ${this.props.text}`}
      </h2>
    </button>
  }
}