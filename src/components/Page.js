import React, { Component } from "react";
import './style/Page.css'
import Slideshow from "../components/Slideshow.js"

export default class Page extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <Slideshow slides={this.props.slides}/>
    );
  }
}