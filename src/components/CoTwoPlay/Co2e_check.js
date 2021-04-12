import React, { useState, useEffect } from "react";
import { co2e } from 'components/CoTwoPlay/Co2e';
import ReactPlayer from "react-player";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

const formateDate = date => {
  // here you should formate the date to display it the way you want
  // e.g show it in minutes
  // e.g. use momentjs
  return parseInt(date / 60000);
};


let co2Thresh = 11.28;
let myTime = new Date();
let currentTime;
let co2eResult;
let count = 0;

export function Co2e_check() {
  const classes = useStyles();    
  let url;
  const [CoTwoInfo, setCoTwoInformation] = useState();  
  const [CurrentCo2e, setCurrentCo2e] = useState(co2e); // default value can be anything you want
//   const [fakeCurrentDate, setFakeCurrentDate] = useState(new Date()); // default value can be anything you want

    const checkCo2 = (co2) =>{
        setCoTwoInformation(co2);
        currentTime = new Date();
        //currentTime = formateDate(currentTime);
        console.log(`ran checkCo2 at ${currentTime} my Co2e is ${co2}`)

    } 

  useEffect(() => {
    setTimeout(() => setCurrentCo2e(co2e),
    myTime = formateDate(new Date()),
    console.log(`myTime ${myTime}`),
    co2e()
		.then(data =>
            co2eResult = data,
			setCoTwoInformation(co2eResult),
            // setTimeout(() => setCoTwoInformation(co2eResult), 3000 ),
            // setTimeout(() => setCoTwoInformation(co2eResult), 13000 ),
            // setTimeout(() => setCoTwoInformation(co2eResult), 90000 )
            setTimeout(() => checkCo2(co2eResult), 1500 ),
            setTimeout(() => checkCo2(co2eResult), 3000 ),
            setTimeout(() => checkCo2(co2eResult), 13000 ),
            setTimeout(() => checkCo2(co2eResult), 23000 ),
            setTimeout(() => checkCo2(co2eResult), 90000 )
		),
        setTimeout(() => setCoTwoInformation(co2eResult),console.log(`ran setCoTwoInformation on ${co2eResult}` + new Date()), 3000 ),
        setTimeout(() => checkCo2(co2eResult), 25000 ),
        setTimeout(() => checkCo2(co2eResult), 26000 ),
        setTimeout(() => setCoTwoInformation('44'), 30000 )
        
        // setTimeout(() => setCoTwoInformation('44'),
        // myTime = formateDate(new Date()),
        // console.log(`myTime 2 ${myTime}`),
        // 30000 )
    , count++,
    console.log("count = " + count),
     60000)}, [CurrentCo2e]);
    
    // const useScroll = () => {
    //     const elRef = useRef(null);
    //     const executeScroll = () => elRef.current.scrollIntoView();

    //     return [executeScroll, elRef];
    // };


  return (
     
    <div id="video">
          <div className={classes.title}>
              <h3>I've set myself a goal of 4.5mt of CO2e annually.  Can I meet it? The animation below will be a daily reminder of how I'm doing. Learn more on the <Link to="/consumption">consumption</Link> page and explore my daily consumption patterns on the <HashLink to="#inputs">consumption ledger</HashLink> below.</h3>
              {(CoTwoInfo) ?
              <h3>Futurescape GAN = a  {(CoTwoInfo > co2Thresh) ? `bleak future based on ${CoTwoInfo}kg above` : `more homogenous future based on ${CoTwoInfo}kg at or below`} a goal of 11.28kg daily emissions. </h3> : <h3></h3>}
            {/* <h3>Futurescape GANs = a {(CoTwoInfo > co2Thresh) ? `bleak future based on ${CoTwoInfo}kg /${myTime} count = ${count}  above` : `more homogenous future based on ${CoTwoInfo}kg ${myTime} count = ${count} at or below`} a goal of 11.28kg daily emissions. </h3> */}
            {/* <h3>Futurescape GANs = a {(CoTwoInfo?.emissions > 1.28) ? "bleak future based on above" : "more homogenous future based on at or below"} a goal of 11.28kg daily emissions. </h3> */}
          </div>
          <div className="square-box">
            <div>
                {(CoTwoInfo) ? 
                <div className="hide">{(CoTwoInfo > co2Thresh) ? url = require("assets/video/apocogan_40s.mp4") : url = require("assets/video/waterfall.mp4") }</div> : <h3>please wait</h3> }
                {(CoTwoInfo) ? <ReactPlayer className="widescreen2" url={url} playing={true} volume={0} muted={true} loop={true} width="100%" height="auto"/> : <h3>Calculating potential future...</h3> }
			</div>
          </div>
        </div>
      
  );
}