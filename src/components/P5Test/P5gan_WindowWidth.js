import React, { useEffect, useState } from 'react';
import p5 from 'p5';


/*
Based off of code from Roy MacDonald's GAN mixing console 
https://medium.com/runwayml/stylegan-mixing-console-3046a63336de
https://github.com/roymacdonald/roymacdonald.github.io/blob/master/stylegan-transition.js
*/




class P5Gan extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.state = { showP5: false }
    if(this.props.em < 11.28){
      //console.log("lower than goal");
      this.fetchUrl = "waterfalgan-079231ad";
      this.fetchKey = "iJBWJJ3D0evaQ0r3HvUylA==";
    } else {
      //console.log("higher than goal");
      this.fetchUrl = "volcanogan-9fbeaed1";
      this.fetchKey = "pBKNXuNSgN1fhZZNw0GSJA==";
    }
    if(this.props.width > 600){
      console.log(this.props.width);
      this.canvasWidth = 550;
      this.canvasHeight = 700;
      this.imgSize = 512;
      this.imgYPos = 80;
    } else {
      console.log(this.props.width);
      this.canvasWidth = 225;
      this.canvasHeight = 315;
      this.imgSize = 200;
      this.imgYPos = 110;
    }

  }

  

  Sketch = (p) => {

    let outputImage;
    // const imgSize = 512; //our image will be 512x512 pixels, which is what StyleGAN requires
    let imgSize = this.imgSize; //our image will be 512x512 pixels, which is what StyleGAN requires
    let bWaiting = false;
    let serverState = "";
    let a = new Array(512);
    // let a = new Array(this.imgSize);
    let ganCanvas;
    a.fill(0.0, 0);


    p.setup = () => {
        ganCanvas = p.createCanvas(this.canvasWidth, this.canvasHeight);
        // ganCanvas = p.createCanvas(550, 700);
        //ganCanvas = p.createCanvas(p.windowWidth, p.windowHeight);
        ganCanvas.mouseClicked(p.ganClick);
        p.getServerState();
        p.updateGan(this.props.em);
        // p.generateImage(this.props.em);
        // console.log(this.props.em);

        // console.log("here");
        p.getServerState();
        outputImage = p.createImg("", "");
        outputImage.hide();
    }

    // p.windowResized = () => { p.resizeCanvas(p.windowWidth, p.windowHeight); }

    p.draw = () => {
      if(p.frameCount%30 === 0)
        {
          p.getServerState();
        }
      
      p.background(255);

      p.image(outputImage, 0, this.imgYPos, this.imgSize, this.imgSize);
      
      p.noStroke();
      p.fill(150);

      let txt = "Waiting for response: " + ((bWaiting === true)?"YES":"NO");
      txt += (serverState === "running") ? "\nServer state: " + serverState : "\nServer state: " + serverState + " - Please wait, startup can take a minute or more. ";
      txt += "\n\nInitial image generated based on your daily CO2e. Click on image to change and explore.";
      
      p.text(txt, 0, 10, this.canvasWidth, this.canvasHeight);
      
    }

    p.getServerState = () =>
    {
      fetch(
        // "https://waterfalgan-079231ad.hosted-models.runwayml.cloud/v1/",
        `https://${this.fetchUrl}.hosted-models.runwayml.cloud/v1/`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${this.fetchKey}`,
            //Authorization: this.fetchKey,
            "Content-Type": "application/json"
          }
        }
      )
      .then(response => response.json())
      .then(myJson => {
        serverState = myJson.status;
        
      });
        
    }

    p.generateImage = (latvect) => {
      // if(bWaiting == false)
      //   {
      const data = {
        z: latvect, //generated latent space vector
        truncation: 0.5 //variation in image generations - higher is more random, lower is more similar
      };

      //// You can use the info() method to see what type of input object the model expects
      // model.info().then(info => console.log(info));
      bWaiting = true;
      fetch(
        `https://${this.fetchUrl}.hosted-models.runwayml.cloud/v1/query`,
        
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${this.fetchKey}`,
            //Authorization: this.fetchKey,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }
      )
        .then(response => response.json())
        .then(outputs => {
          // console.log(outputs);
          outputImage.attribute("src", outputs.image);
          bWaiting = false;
          
        })
      .catch(function(error) {
      console.log('There was a problem with the request Fetch:' + error.message);
      });
       
    }

    
    p.ganClick = () => {
      if (p.mouseX < 520 && p.mouseY < 520){
        let map1 = p.map(p.mouseY, 0, imgSize, 1, -1);

        p.updateGan(map1);
      }
    }

    p.updateGan = (intVal) => {
        for (let i = 0; i < imgSize; i++) {
        a[i] = 2 * p.noise(intVal * i) - 1;
        }
        p.getServerState();
        p.generateImage(a);

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

export default P5Gan;


