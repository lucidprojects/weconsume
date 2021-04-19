import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function BitcoinSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2>“The utility of the exchanges made possible by Bitcoin will far exceed the cost of electricity used. Therefore, not having Bitcoin is a net waste,”</h2> Satoshi Nakamoto BitcoinTalk.org, c. 2010.
          <h2 className={classes.title}>Bitcoin</h2>
          <h5 className={classes.description}>
           Bitcoin and the underlying blockchain technology have tremendous potential to help drive climate action. Often criticized for its power consumption, its potential, and comparisons to energy from other sectors show this is a misconception.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Driving Renewables"
              description="Bitcoin is an energy market incentivizing participants to seek out cheap energy.  That includes renewables and previously oversupplied power."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Separation of Money & State"
              description="Bitcoin provides a trustless system.  Reducing the need for third parties with their own agendas."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Impact Quantification Verification"
              description="Various use cases where it applies, offering solutions for better transparency, supply chain tracing, governance, data management and impact, quantification and verification."
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
