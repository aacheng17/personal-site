import React, { Component } from "react";

export default class Fade extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mounted: false
    }
  }

  componentDidMount() {
    this.interval = setInterval(
      () => {
        this.setState({ mounted: true })
        clearInterval(this.interval);
      }, 10
    );
  }

  render() {
    var startX, endX, startOpacity, endOpacity, duration, content;
    switch (this.props.inOut) {
      default:
      case 1: startX = -this.props.distance; endX = 0; startOpacity = 0; endOpacity = 1; duration = this.props.transitionDuration; content = this.props.children; break;
      case 0: startX = 0; endX = 0; startOpacity = 1; endOpacity = 1; duration = 0; content = this.props.children; break;
      case -1: startX = 0; endX = this.props.distance; startOpacity = 1; endOpacity = 0; duration = this.props.transitionDuration; content = this.props.oldContent; break;
    }

    return (
      <div className={this.props.className}
        style={{
          transition: `opacity ${duration}ms, transform ${duration}ms`,
          transform: `translate${this.props.xY}(${this.state.mounted ? endX : startX}px)`,
          opacity: this.state.mounted ? endOpacity : startOpacity
        }}
      >
        {content}
      </div>
    );
  }
}