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
// import styles from "assets/jss/material-kit-react/views/profilePage.js";
import styles from "assets/jss/material-kit-react/views/components.js";

// Sections for this page
import ChangeSection from "./Sections/ChangeSection.js";
import DetailSection from "./Sections/DetailSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function Whatyoucando(props) {
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
      <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.brand}>
              <h1 className={classes.title}>You Can Make a Difference.</h1>
              <h4>
                The idea of one's impact and ability to drive real change can often be discouraging.  But your actions matter.
              </h4>
              <br />
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ChangeSection />
          <DetailSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
