import React from 'react';
import p5 from 'p5';

class P5Gan extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.state = { showP5: false }
    if(this.props.em < 11.22){
      console.log("lower than goal");
      this.fetchUrl = "waterfalgan-079231ad";
      this.fetchKey = "iJBWJJ3D0evaQ0r3HvUylA==";
    } else {
      console.log("higher than goal");
      this.fetchUrl = "volcanogan-9fbeaed1";
      this.fetchKey = "pBKNXuNSgN1fhZZNw0GSJA==";
    }

  }

  

  Sketch = (p) => {

    let outputImage, saveImage;
    const imgSize = 512; //our image will be 512x512 pixels, which is what StyleGAN requires
    let bWaiting = false;
    let serverState = "";
    let a = new Array(512);
    let ganCanvas;
    a.fill(0.0, 0);


    p.setup = () => {
        ganCanvas = p.createCanvas(550, 700);
        ganCanvas.mouseClicked(p.ganClick);
        p.getServerState();
        p.generateImage(this.props.em);
        console.log(this.props.em);
        console.log("here");
        p.getServerState();
        outputImage = p.createImg("", "");
        outputImage.hide();
    }

    p.draw = () => {
      if(p.frameCount%30 == 0)
        {
          p.getServerState();
        }
      
      p.background(255);
      p.image(outputImage, 0, 80, 512, 512);
      
      p.noStroke();
      p.fill(150);

      let txt = "Waiting for response: " + ((bWaiting===true)?"YES":"NO");
      txt += (serverState == "running") ? "\nServer state: " + serverState : "\nServer state: " + serverState + " - Please wait, startup can take a minute or more. ";
      txt += "\n\nInitial image generated based on your daily CO2e. Click on image to change and explore.";
      
      p.text(txt, 10, 10);
      
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

    p.mouseMoved = () => {
      console.log = `mouseX = ${p.mouseX} mouseY = ${p.mouseY}`;
      console.log = "mouse moved";
    }

    // p.mouseClicked = () => {
    //   if (p.mouseX < 520 && p.mouseY < 520){
    //     let map1 = p.map(p.mouseY, 0, imgSize, 1, -1);

    //     //  a.fill(map1, 0);
    //     for (let i = 0; i < imgSize; i++) {
    //     a[i] = 2 * p.noise(map1 * i) - 1;
    //     }
    //     p.getServerState();
    //     p.generateImage(a);
    //   }
    // }

    p.ganClick = () => {
      if (p.mouseX < 520 && p.mouseY < 520){
        let map1 = p.map(p.mouseY, 0, imgSize, 1, -1);

        //  a.fill(map1, 0);
        for (let i = 0; i < imgSize; i++) {
        a[i] = 2 * p.noise(map1 * i) - 1;
        }
        p.getServerState();
        p.generateImage(a);
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

export default P5Gan;


