import React, { Component } from "react";
const NUM_DOTS = 500

function getColor(){ 
  return "hsl(" + 360 * Math.random() + ',' +
    (25 + 70 * Math.random()) + '%,' + 
    (85 + 10 * Math.random()) + '%)'
}

export default class Dots extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mounted: false
    }
  }

  mouseMoveHandler(event) {
    var x = event.clientX;
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.mouseMoveHandler);
    this.interval = setInterval(
      () => {
        this.setState({ mounted: true })
        clearInterval(this.interval);
      }, 10
    );
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove',this.mouseMoveHandler);
  }

  render() {
    var dots = [];
    for (var i=0;i<NUM_DOTS;i++) {
      var s = Math.ceil(Math.random())*20*(((1-(i+1)/(NUM_DOTS+1))*0.75+0.25));
      var x = Math.ceil(Math.random()*i*4)-50;
      var y = Math.ceil(Math.random()*i*4)-50;
      var z = Math.ceil(-1-Math.random()*20);
      var time = 200+Math.ceil(Math.random()*100);
      dots.push(
        <svg key={"svg"+i} width={s} height={s} style={{
          position: 'absolute',
          transition: `left ${time}ms, top ${time}ms`,
          left: this.state.mounted ? x : -x,
          top: this.state.mounted ? y : -y,
          zIndex: z,
        }}>
          <rect width={s} height={s} style={{fill:getColor(),strokeWidth:0}} />
        </svg>
      );
    }
    return <div className='dots-container'>
      {dots}
    </div>;
  }
}