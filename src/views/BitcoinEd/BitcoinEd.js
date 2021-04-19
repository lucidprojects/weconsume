import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import ReactPlayer from "react-player";

// import styles from "assets/jss/material-kit-react/views/landingPage.js";
import styles from "assets/jss/material-kit-react/views/components.js";


// Sections for this page
import BitcoinSection from "./Sections/BitcoinSection.js";
import DetailsSection from "./Sections/DetailsSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function BitcoinEd(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="We Consume"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      {/* <Parallax filter image={require("assets/img/landing-bg.jpg")}> */}
      <Parallax>
        <ReactPlayer
          className="hdrbgbtc"
          // url="https://www.youtube.com/watch?v=ox2VQ45pcaM"
          url={[
            // { src: "foo.webm", type: "video/webm" },
            {
              src: require("assets/video/bitcoin_network.mp4"),
              type: "video/mp4",
            },
            // { src: require("assets/video/waterfall.webm"), type: "video/webm" },
          ]}
          playing={true}
          volume={0}
          muted={true}
          loop={true}
          width="100%"
          height="auto"
        />
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
            <div className={classes.brand}>  
              <h1 className={classes.title}>Bitcoin Education</h1>
              <h4>
                How can Bitcoin and blockchain help drive climate action?
              </h4>
            </div>  
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <BitcoinSection />
          <DetailsSection /> 
        </div>
      </div>
      <Footer />
    </div>
  );
}
