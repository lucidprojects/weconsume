import React from 'react';
import p5 from 'p5';
import ShowP5Button from 'components/P5Test/ShowP5'

class P5Test extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.state = { showP5: false }

  }

  Sketch = (p) => {
      
    let x = 320;
    let y = 180;
    let xspeed = 5;
    let yspeed = 2;

    let r = 25;

    p.setup = () => {
        p.createCanvas(400, 400);
        //p.background("#ff0000");
    }

    p.draw = () => {
       p.background(0);  
       p.fill('green');
       p.ellipse(x, y, r*2, r*2);
       x += xspeed;
       y += yspeed;
        if (x > p.width - r || x < r) {
            xspeed = -xspeed;
       }
       if (y > p.height - r || y < r) {
            yspeed = -yspeed;
       }
    }
  }

  componentDidMount() {
    this.myP5 = new p5(this.Sketch, this.myRef.current)
  }

  render() {
    return (
        <div ref={this.myRef}></div> 
    )
  }
}

export default P5Test;


// ReactDOM.render(
// 	<App />
// , app)