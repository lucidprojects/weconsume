import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import AddAlarmIcon from '@material-ui/icons/AddAlarm';
import TuneIcon from '@material-ui/icons/Tune';

// papaparse csv test
// import Papaparse from "components/Papaparse/Papaparse.js";



// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/components.js";
// import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title}>We Consume</h2>
          <h5 className={classes.description}>
            Can emerging technologies like blockchain and privacy preserving machine learning help us reverse the climate damage we've caused?
            <br /><br />
            What makes a conscious consumer and what affect does that have at scale?
            <br /><br />
            With We Consume I will research and answer some of these questions.
            <br /><br />
            I will track me daily consumption and attempt to quantify my resulting emissions.
            <br /><br />
            The project will explore blockchain technologies by building a private Bitcoin network and tracking my consumption patterns to the blockchain.
            <br /><br />
            A website will publicly expose my consumption. Allowing others to praise or judge me.
            <br /><br />
            Along with my public consumption data there will be a series of StyleGAN latent space walk animations representing potential future where we become more conscious or continue business as usual and are faced bleak truth, a resulting inhospitable would we carelessly created.
            <br /><br />
            The ephemeral feeling of the StyleGANs will convey a future not quite written in stone.
            <br /><br />
            My consumption will control visuals on the website as well as an art piece cycling through variously latent space walk animations.
            <br /><br />
            I will set a goal of personal annual emissions and if my daily amount is above that goal the visual will represent a more dystopian future.  If my consumption is below the threshold the visuals will embue a more vital environment.
            {/* {"'"}t scroll to get here. Add a button if you want the user to see
            more. */}
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Consumption"
              description="Humans have increasingly become an immediate gratification civilization. Often consuming more than we need and wasting in turn."
              icon={AddAlarmIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Machine Learning"
              description="Privacy preserving machine learning offers a way to preserve privacy and IP while allowing for learning across corporations and industries."
              icon={TuneIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Blockchain"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={AccountTreeIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
        </GridContainer>

        {/* <Papaparse/>
        <div id="test"></div> */}
      </div>
    </div>
  );
}
