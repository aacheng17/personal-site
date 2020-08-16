import React, { Component } from "react";
import Arrow from "../components/Arrow.js"
import FadeTransition from "../components/FadeTransition.js"

export default class Page extends Component {
  constructor() {
    super();
    this.state = {
      slide: 0,
      lastSlide: -1,
      slideDirection: 1
    };
    this.arrowHandler = this.arrowHandler.bind(this);
  }

  mod(a,b) {
    return ((a % b) + b) % b; 
  }

  modSlides(n) {
    return this.mod(n,this.props.slides.length);
  }

  arrowHandler(direction) {
    this.setState({
      lastSlide: this.state.slide,
      slide: this.modSlides(this.state.slide + direction),
      slideDirection: direction
    });
  }

  render() {
    const content = this.props.slides[this.state.slide].content;
    const oldContent = this.state.lastSlide > -1 ? this.props.slides[this.state.lastSlide].content : undefined;
    return (
      <div className="Slideshow">
        <div className="arrow-wrapper" style={{textAlign: "right", transform: "translateX(-20px)"}}>
          {
            this.props.slides.length > 1 ? (
              <Arrow text={this.props.slides[this.modSlides(this.state.slide-1)].title} direction={-1} onClick={this.arrowHandler}/>
            ) : undefined
          }
        </div>
        <div className="fade-wrapper">
          <FadeTransition distance={-20*this.state.slideDirection} oldContent={oldContent} key={this.state.lastSlide}>
            {content}
          </FadeTransition>
        </div>
        <div className="arrow-wrapper" style={{textAlign: "left", transform: "translateX(20px)"}}>
          {
            this.props.slides.length > 1 ? (
              <Arrow text={this.props.slides[this.modSlides(this.state.slide+1)].title} direction={1} onClick={this.arrowHandler}/>
            ): undefined
          }
        </div>
      </div>
    );
  }
}