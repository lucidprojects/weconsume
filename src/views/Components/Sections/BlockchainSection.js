import React from "react";
// plugin that creates slider
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import BlkTxs from "components/Blkdata/Blkdata.js";

import CoTwoInfo2 from 'components/CoTwoPlay/CoTwoPlay2';
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function BlockchainSection(props) {
  const classes = useStyles();

  console.log(props);

  return (
    <div className={classes.sections}>
      <div className={classes.container}>
            <CoTwoInfo2/>
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
