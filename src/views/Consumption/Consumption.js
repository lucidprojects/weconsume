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

import styles from "assets/jss/material-kit-react/views/components.js";


// Sections for this page
import ConsumptionForm from "./Sections/ConsumptionForm.js";
import MethodolgySection from "./Sections/MethodolgySection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function Consumption(props) {
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
      <Parallax filter image={require("assets/img/meters_sml.jpg")} altName={"Photo by Jon Moore on Unsplash"}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.brand}>
              <h1 className={classes.title}>Consumption</h1>
              <h4>
                How much do we consume?  How much do we need?  What is too much?
              </h4>
              </div>
              
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          {/* <ProductSection />
          */}
          <ConsumptionForm classes={classes}/>
          <MethodolgySection /> 
          {/* <MyForm /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
