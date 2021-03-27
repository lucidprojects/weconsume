import React from "react";
import ReactPlayer from "react-player";

// let myGan;
let url;

console.log("I want to play a GAN");

class GanToPlay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "GanToPlay",

    };

  }

  whichGan2Play(co2eD) { 
    if(co2eD < 11.1826){
      url = require("assets/video/waterfall.mp4");
    } else {
      url = require("assets/video/desert.mp4");
    }
    console.log(`whichGan2Play ${url}`);

    return (
    <ReactPlayer className="widescreen2" url={url} playing={true} volume={0} muted={true} loop={true} width="100%" height="auto"  />
    );
  }
  render() {
    
    // return null;
    return (
      <div className="myGanVid">
        {console.log(`What do I got? ${this.props.co2eD}`)}
        {this.whichGan2Play(this.props.co2eD)}
      </div>      
    )
  }
}

export default GanToPlay;

