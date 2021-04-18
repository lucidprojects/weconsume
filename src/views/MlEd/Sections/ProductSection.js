import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import NatureIcon from '@material-ui/icons/Nature';

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
          <h2 >Machine Learning</h2>
          <h5 className={classes.description}>
           Privacy Preserving Machine Learning (PPML) offers to greatly change the way we collect and mine data. 
<br/><br/>
Consistently the news headlines read of data breaches and exposed sensitive data. Not to mention the tremendous amount of surveillance and breach of privacy being used to train models traditionally.
<br/><br/>
PPML techniques like multi-party computation, homomorphic encryption, and federated learning allow for significant improvements over traditional training techniques.
<br/><br/>
A recent <a href="https://venturebeat.com/2021/02/16/study-shows-that-federated-learning-can-lead-to-reduced-carbon-emissions/" target="_blank">study</a> has shown that Federated Learning has the potential to greatly reduce energy consumption while training and increases the training accuracy.
<br/><br/>
The <a href="https://www.openmined.org" target="_blank">Openmined.org</a> team offers numerous resources and courses on the groundbreaking techniques.
<br/><br/>
For the We Consume project I am exploring machine learning by training StyleGAN models. I'm using the space between the vectors to create latent space walks and envision potential future scenarios based on my own consumption patterns. Curating the data set and directing the latent animation by isolating desired seeds allow for a unique way of storytelling.
<br /><br />
Majority of the training work was done on NYU's Greene HPC. Which is said to be one of the top 100 "greenest" supercomputers in the world. [<a href="https://www.nyu.edu/about/news-publications/news/2020/november/GreeneSupercomputer.html" target="_blank">source</a>]. Throughout the process I also moved from Tensorflow to PyTorch which is said to train 30% faster.

<br/><br/>
<br/><br/>
          </h5>
        </GridItem>
      </GridContainer>
      
    </div>
  );
}
