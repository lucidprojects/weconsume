import React from "react";
// plugin that creates slider
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// import Favorite from "@material-ui/icons/Favorite";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import BlkTxs from "components/Blkdata/Blkdata.js";

import Papaparse from "components/Papaparse/Papaparse.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

//video
//import ReactPlayer from "react-player";
import GanToPlay from "components/GanToPlay/GanToPlay";

const useStyles = makeStyles(styles);

let ganVid;
let co2eDVal;
let url;

export default function SectionBasics() {
  const classes = useStyles();

  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div id="video">
          <div className={classes.title}>
            <h3>Futurescape GANs</h3>
          </div>
          <div className="square-box">
            <GanToPlay co2eD={2}/>
          </div>
        </div>
        <div className={classes.space50} />
        <div id="inputs">
          <div className={classes.title}>
            <h3>Consumption Blockchain</h3>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <BlkTxs />
              <div id="consume_msgs"></div>
            </GridItem>
          </GridContainer>
        </div>
        <div className={classes.space70} />
      </div>
    </div>
  );
}
