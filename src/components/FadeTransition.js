import React, { Component } from "react";
import Fade from "./Fade.js";

export default class FadeTransition extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inOut : -1
    }
  }

  get transitionDuration() {
    return this.props.transitionDuration || 300;
  }

  get distance() {
    return this.props.distance || -20;
  }

  get xY() {
    return this.props.xY || "X";
  }

  componentDidMount() {
    if (this.props.oldContent !== undefined) {
      this.interval = setInterval(
        () => {
          this.setState({ inOut : 1 });
          clearInterval(this.interval);
        }, this.transitionDuration
      );
    }
  }

  render() {
    return (
      <Fade
        inOut={this.props.oldContent === undefined ? 1 : this.state.inOut}
        oldContent={this.props.oldContent}
        key={this.state.inOut}
        transitionDuration={this.transitionDuration}
        distance={this.distance}
        xY={this.xY}
      >
        {this.props.children}
      </Fade>
    );
  }
}