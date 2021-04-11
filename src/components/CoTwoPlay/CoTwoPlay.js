import React, { useEffect, useState } from 'react';
import { co2e } from 'components/CoTwoPlay/Co2e';
import { Co2e_check } from 'components/CoTwoPlay/Co2e_check';
import { Co2eUpdate } from 'components/CoTwoPlay/Co2e_update_test';
import ReactPlayer from "react-player";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

let co2Thresh = 11.28;


export default function CoTwoInfo({ name }) {	
	const classes = useStyles();

	const [CoTwoInfo, setCoTwoInformation] = useState();
	let url;
	
	// useEffect(() => {
	// 	co2e(name)
	// 	.then(data =>
	// 		setCoTwoInformation(data)
	// 	);
	// //})
	// },[name])

	useEffect(() => {
		co2e()
		.then(data =>
			setCoTwoInformation(data)
		);
	//})
	})

	return(
		// <div id="video">
        //   <div className={classes.title}>
        //     <h3>Futurescape GANs = a {(CoTwoInfo?.emissions > co2Thresh) ? `bleak future based on ${CoTwoInfo?.emissions}kg above` : `more homogenous future based on ${CoTwoInfo?.emissions}kg at or below`} a goal of 11.28kg daily emissions. </h3>
        //     {/* <h3>Futurescape GANs = a {(CoTwoInfo?.emissions > 1.28) ? "bleak future based on above" : "more homogenous future based on at or below"} a goal of 11.28kg daily emissions. </h3> */}
        //   </div>
        //   <div className="square-box">
        //     <div>
		// 		<div className="hide">{(CoTwoInfo?.emissions > co2Thresh) ? url = require("assets/video/apocogan_40s.mp4") : url = require("assets/video/waterfall.mp4") }</div>
		// 		<ReactPlayer className="widescreen2" url={url} playing={true} volume={0} muted={true} loop={true} width="100%" height="auto"  />
		// 	</div>
        //   </div>
        // </div>
		
		// <div id="video">
        //   <div className={classes.title}>
        //     <h3>Futurescape GANs = a {(CoTwoInfo > co2Thresh) ? `bleak future based on ${CoTwoInfo}kg above` : `more homogenous future based on ${CoTwoInfo}kg at or below`} a goal of 11.28kg daily emissions. </h3>
        //     {/* <h3>Futurescape GANs = a {(CoTwoInfo?.emissions > 1.28) ? "bleak future based on above" : "more homogenous future based on at or below"} a goal of 11.28kg daily emissions. </h3> */}
        //   </div>
        //   <div className="square-box">
        //     <div>
		// 		<div className="hide">{(CoTwoInfo > co2Thresh) ? url = require("assets/video/apocogan_40s.mp4") : url = require("assets/video/waterfall.mp4") }</div>
		// 		<ReactPlayer className="widescreen2" url={url} playing={true} volume={0} muted={true} loop={true} width="100%" height="auto"  />
		// 	</div>
        //   </div>
        // </div>
		<div>	
			<Co2e_check />
			{/* <Co2eUpdate /> */}
		</div>
	)
}
