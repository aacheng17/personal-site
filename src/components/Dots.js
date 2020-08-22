import React, { Component } from "react";

function getColor(hMin,hRange,sMin,sRange,lMin,lRange){ 
  return "hsl(" + (hMin + hRange * Math.random()) % 360 + ',' +
    (sMin + sRange * Math.random()) + '%,' +
    (lMin + lRange * Math.random()) + '%)'
}

const hMin = 360 * Math.random(), hRange = 360 * Math.random();
const sMin = 50 * Math.random(), sRange = 70 * Math.random();
const lMin = 60 + 30 * Math.random(), lRange = 35 * Math.random();

export default class Dots extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mounted: false,
      mouseMoved: false,
      mouseXOrig: 0,
      mouseYOrig: 0,
      mouseX: 0,
      mouseY: 0
    }

    this.NUM_DOTS = 150 + 100 * Math.random();
    this.MAX_SIZE = 15 + 10 * Math.random();

    this.s = [];
    this.x = [];
    this.y = [];
    this.z = [];
    this.time = [];
    this.color = [];

    for (var i=0;i<this.NUM_DOTS;i++) {
      this.s.push(Math.ceil(Math.random())*this.MAX_SIZE*(((1-(i+1)/(this.NUM_DOTS+1))*0.75+0.25)));
      this.x.push(Math.ceil(Math.random()*i*4)-50);
      this.y.push(Math.ceil(Math.random()*i*4)-50);
      this.z.push(Math.ceil(-1-Math.random()*20));
      this.time.push(200+Math.ceil(Math.random()*100));
      this.color.push(getColor(hMin,hRange,sMin,sRange,lMin,lRange));
    }
  }

  mouseMoveHandler(event) {
    if (!this.state.mouseMoved) {
      this.setState({
        mouseMoved: true,
        mouseXOrig: event.clientX,
        mouseYOrig: event.clientY,
      });
    } else {
      this.setState({
        mouseX: event.clientX,
        mouseY: event.clientY
      });
    }
  }

  componentDidMount() {
    this.interval = setInterval(
      () => {
        this.setState({ mounted: true });
        clearInterval(this.interval);
      }, 10
    );
    this.mouseInterval = setInterval(
      () => {
        window.addEventListener('mousemove', (event) => this.mouseMoveHandler(event));
        clearInterval(this.mouseInterval);
      }, 300
    );
  }

  componentWillUnmount() {
    //window.removeEventListener('mousemove', (event) => this.mouseMoveHandler(event));
  }

  render() {
    console.log(this.state.mounted);
    var dots = [];
    for (var i=0;i<this.NUM_DOTS;i++) {
      dots.push(
        <svg key={"svg"+i} width={this.s[i]} height={this.s[i]} style={{
          position: 'absolute',
          transition: this.state.mouseMoved ? "" : `left ${this.time[i]}ms, top ${this.time[i]}ms`,
          left: this.state.mounted ? (this.state.mouseMoved ? this.x[i] + (this.state.mouseX - this.state.mouseXOrig)/(-this.z[i]) : this.x[i]) : -Math.abs(this.x[i])-200,
          top: this.state.mounted ? (this.state.mouseMoved ? this.y[i] + (this.state.mouseY - this.state.mouseYOrig)/(-this.z[i]) : this.y[i]) : -Math.abs(this.y[i])-200,
          zIndex: this.z[i],
        }}>
          <rect width={this.s[i]} height={this.s[i]} style={{fill:this.color[i],strokeWidth:0}} />
        </svg>
      );
    }
    return <div className='dots-container'>
      {dots}
    </div>;
  }
}