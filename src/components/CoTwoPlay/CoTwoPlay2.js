import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { makeStyles } from "@material-ui/core/styles";
import Papa from "papaparse";
import ReactPlayer from "react-player";
import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

const MYSHEET =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQLNYCe1yagGCePlBPasi2bjAGc3X4cPIeAxJPpegHjCdnJ7bRBRLZkqbSGvWyymACFbiABvhzzwRzK/pub?gid=871249801&single=true&output=csv";

const TESTSHEET =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQLNYCe1yagGCePlBPasi2bjAGc3X4cPIeAxJPpegHjCdnJ7bRBRLZkqbSGvWyymACFbiABvhzzwRzK/pub?gid=1243371662&single=true&output=csv";

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

let co2Thresh = 11.28;


export default function CoTwoInfo2({ name }) {	
	const classes = useStyles();

	const [rows, setRows] = useState([]);
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		setInterval(() => {
		// setTimeout(() => {
		//setRows(0);
		setSeconds(seconds => seconds + 1);
		Papa.parse(MYSHEET, {
			download: true,
			header: true,
			complete: data => {
				setRows(data.data[0].co2edaily)
				myCo2eV = data.data[0].co2edaily
				prevVal != myCo2eV ? ranUpdate() : checkUpdate()
				prevVal = myCo2eV;
			}
		});
		}, 5000);
	}, []);

	return (
		<div>
		{/* <div>{JSON.stringify(rows)}</div> */}
		{/* { window.clearInterval(timer)} */}
		{/* <div> <h4>where am I?</h4></div>
		<div>{rows} or {myCo2eV}</div> */}
		<div>
			<h3>The Weconsu.me project is an exploration of consumption, emerging technologies, and what motivates us to be conscious consumers. An exercise in quantified self and an attempt to invoke introspection into one's own consumption patterns.</h3>
			<h3>Over the last half century we've made some poor decisions. In order to correct course drastic sacrifices are required.</h3>
			<h3>I've set myself a goal of 4.5mt of CO2e annually.  Can I meet it? The animation below will be a daily reminder of how I'm doing. Learn more on the <Link to="/consumption">consumption</Link> page and explore my daily consumption patterns on the <HashLink to="#inputs">consumption ledger</HashLink> below.</h3>
		</div>
		{/* <div>
			{(myCo2eV >= co2Thresh) ? rows + ` greater than ${co2Thresh}` : rows + ` less than ${co2Thresh}`}
		</div> */}
		{(myCo2eV) ?
		<h3>Futurescape GAN = a  {(myCo2eV > co2Thresh) ? `bleak future based on ${myCo2eV}kg above` : `more homogenous future based on ${myCo2eV}kg at or below`} a goal of 11.28kg daily emissions. </h3> : <h3></h3>}
		<div className="hide">
			{myCo2eV > co2Thresh ? url = require("assets/video/apocogan_40s.mp4") : url = require("assets/video/waterfall.mp4")}{" "}
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
			<h3>Calculating potential future...</h3>
		)}
		</div>
	);
}
