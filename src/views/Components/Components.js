import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionBasics from "./Sections/SectionBasics.js";
import Papa from 'papaparse';


// papaparse csv test
import BlkTxs from "components/Blkdata/Blkdata.js";
import Papaparse from "components/Papaparse/Papaparse.js";

import ReactPlayer from "react-player";

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);


export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  
  return (
    <div>
      <Papaparse/>
      <Header
        brand="We Consume"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      
      <Parallax>
        <ReactPlayer
          className="hdrbg"
          url={[
            {
              src: require("assets/video/earth_spin_mask_2.mp4"),
              type: "video/mp4",
            },
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
            <GridItem xs={12} sm={12} md={6} lg={6}>
              <div className={classes.brand}>
                <h1 className={classes.title}>We Consume</h1>
                <h3 className={classes.subtitle}>
                  What Motivates Us to Be More Climate Conscious?
                </h3>
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={6} lg={6}>
              <div className={classes.brandright}>
                <h1 id="co2e" className={classes.title}></h1>
                
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionBasics />
      </div>
      <Footer />
    </div>

  );

  
}
