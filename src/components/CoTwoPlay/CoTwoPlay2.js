import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { makeStyles } from "@material-ui/core/styles";
import Papa from "papaparse";
import ReactPlayer from "react-player";
import styles from "assets/jss/material-kit-react/views/components.js";
import Calculating from "components/LoadingText/LoadingText.js";

const useStyles = makeStyles(styles);

const MYSHEET =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQLNYCe1yagGCePlBPasi2bjAGc3X4cPIeAxJPpegHjCdnJ7bRBRLZkqbSGvWyymACFbiABvhzzwRzK/pub?gid=871249801&single=true&output=csv";

var myCo2eV;
let prevTime;
let prevVal;
let updateTime;
let wasUpdated = false;
// let co2Thresh = 5;
let url;

const ranUpdate = () => {
  updateTime = new Date();
  console.log(`papaparse ran update ${myCo2eV} != ${prevVal} @ ${updateTime}`);
  prevTime = updateTime;
  wasUpdated = true;
};

const checkUpdate = () => {
  if (wasUpdated) {
    console.log(`papaparse ran ${prevVal} = ${myCo2eV}`);
    wasUpdated = false;
  } else {
  }
};

let co2Thresh = 12.32;

let ranVid = Math.floor(Math.random()*2) 
console.log(`ranVid = ${ranVid}`);

export default function CoTwoInfo2({ name }) {	
	const classes = useStyles();

	const [rows, setRows] = useState([]);
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		setInterval(() => {
		setSeconds(seconds => seconds + 1);
		Papa.parse(MYSHEET, {
			download: true,
			header: true,
			complete: data => {
				setRows(data.data[0].co2edaily)
				myCo2eV = data.data[0].co2edaily
				prevVal !== myCo2eV ? ranUpdate() : checkUpdate()
				prevVal = myCo2eV;
			}
		});
		}, 3000);
	}, []);

	return (
		<div>
		
		<div>
			<h3>The Weconsu.me project explores climate change, consumption, emerging technologies, and what motivates us to be conscious consumers. An exercise in quantified self and an attempt to invoke introspection into one's consumption patterns.</h3>
 <h3>Over the last half-century, we've made some poor decisions. To correct course drastic sacrifices are required.</h3>
 <h3>I've set myself a goal of 4.5mt of CO2e annually. Can I meet it? The animation below will be a daily reminder of how I'm doing. Learn more on the <Link to="/consumption">consumption</Link> page and explore my daily consumption patterns on the <HashLink to="#inputs">consumption ledger</HashLink> below.</h3>
		</div>
		
		{(myCo2eV) ?
		<h3>Futurescape GAN =  {(myCo2eV > co2Thresh) ? 
		ranVid === 1 ? `Over population, air pollution, smog, rising temperatures, and crumbling infrastructure paint a bleak future, based on ${myCo2eV}kg, above` : `Flooding, fires, droughts, and waste. The future of a warming planet, based on ${myCo2eV}kg, above` : 
		ranVid === 1 ? `A more vibrate, symbiotic relationship between humans and the planet creates a more harmonious future based on ${myCo2eV}kg, at or below` : `Climate change starts with equality. We need to come together to cherish each other and the planet. A more equitable future based on ${myCo2eV}kg, at or below` } the goal of 12.32kg daily emissions. </h3> : <span></span>}
		{/* <h3>Futurescape GAN = a {(myCo2eV > co2Thresh) ? `bleak future based on ${myCo2eV}kg above` : `more homogenous future based on ${myCo2eV}kg at or below`} a goal of 12.32kg daily emissions. </h3> : <span></span>} */}
		<div className="hide">
			{(ranVid === 1) ?
			myCo2eV > co2Thresh ? url = require("assets/video/smog1_noloop.mp4") : url = require("assets/video/waterfall.mp4") :
			myCo2eV > co2Thresh ? url = require("assets/video/apocogan_40s.mp4") : url = require("assets/video/hands.mp4")}:{" "}
		</div>
		{myCo2eV ? (
			<ReactPlayer
			className="widescreen2"
			url={url}
			playing={true}
			volume={0}
			muted={true}
			loop={true}
			width="100%"
			height="auto"
			/>
		) : (
			<h3><Calculating /></h3>
			
		)}
		
		
		</div>
	);
}
