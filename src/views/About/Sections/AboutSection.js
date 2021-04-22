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

export default function AboutSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title}>We Consume</h2>
          <h5 className={classes.description}>
            Can emerging technologies like blockchain and privacy-preserving machine learning help us reverse the climate damage we've caused?
          <br /><br />
          What makes a conscious consumer, and what effect does that have at scale?
          <br /><br />
          With We Consume I will research and answer some of these questions.
          <br /><br />
          I will track my daily consumption and attempt to quantify my resulting emissions.
          <br /><br />
          The project will explore blockchain technologies by building a private Bitcoin network and tracking my consumption patterns to the blockchain.
          <br /><br />
          A website will publicly expose my consumption. Allowing others to praise or judge me.
          <br /><br />
          Along with my public consumption data, there will be a series of StyleGAN latent space walk animations. Representing a potential future where we become more conscious or continue business as usual and are faced bleak truth, a resulting inhospitable would we carelessly created.
          <br /><br />
          The ephemeral feeling of the StyleGANs will convey a future not quite written in stone.
          <br /><br />
          My consumption will control visuals on the website and act as a daily reminder of my actions
          <br /><br />
          I will set a goal of personal annual emissions, and if my daily amount is above that goal, the visual will represent a more dystopian future. If my consumption is below the threshold, the visuals will imbue a more vital environment.
            <br /><br />           
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
              description="Bitcoin and blockchain technologies use cases: boosting transparency, simplifying clean energy trading, enforcing commitments, and enhancing emissions reporting and eliminating double counting."
              icon={AccountTreeIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
        </GridContainer>

        
        <br /><br />
      </div>

      <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h5 className={classes.description}>
            <b>Technical Details</b><br />
            Two Raspberry Pi nodes are running the We Consume Bitcoin regtest network. Using the open-source <a href="https://bitcoin.org/en/bitcoin-core/" target="_blank" rel="noopener noreferrer">Bitcoin core</a> software, the nodes communicate via <a href="https://searchapparchitecture.techtarget.com/definition/Remote-Procedure-Call-RPC" target="_blank" rel="noopener noreferrer">RPC protocol</a>. They sign, transmit, and validate the transactions between each other. I am using a script opcode function of the Bitcoin protocol called <a href="https://en.bitcoin.it/wiki/OP_RETURN" target="_blank" rel="noopener noreferrer">OP_RETURN</a>, which allows me to write a message to the blockchain. Using OP_RETURN in this way is not necessarily the intended use but suits the needs of this project.
            <br /><br />   
            A google form and sheet track my consumption and quantifies it via a series of formulas and tabs. A bash script accesses the required data from the google sheet, creates, signs, and transmits my daily consumption to the blockchain.
            <br /><br />   
            A modified version of <a href="https://github.com/janoside/btc-rpc-explorer" target="_blank" rel="noopener noreferrer">BTC-RPC-EXPLORER</a> allows me to access all transactions with OP_RETURN messages, and a simple API lets me expose that data to the weconsu.me website.
            <br /><br />   
            The weconsu.me website is my first attempt at a reactjs site. Built on a Material UI template, It accesses the block explorer API and uses several components to display the futurescape GAN animations based on my consumption. There is also a simplified tool to allow other users to quantify their emissions. A p5 sketch and the RunwayML hosted model API will enable them to generate a styleGAN still based on their emissions.  The p5 sketch code was based on Roy Macdonald’s awesome <a href="https://github.com/roymacdonald/roymacdonald.github.io/blob/master/stylegan-transition.js" target="_blank" rel="noopener noreferrer">styleGan mixer</a>.
            <br /><br />   
            The machine learning was done with NYU’S <a href="https://www.nyu.edu/about/news-publications/news/2020/november/GreeneSupercomputer.html" target="_blank" rel="noopener noreferrer">Greene HPC</a>.  In order to use it I needed to learn about <a href="https://docs.rc.fas.harvard.edu/kb/singularity-on-the-cluster/" target="_blank" rel="noopener noreferrer">Singularity</a> containers and <a href="https://slurm.schedmd.com/quickstart.html" target="_blank" rel="noopener noreferrer">Slurm</a> workload manager. As I figured out how to work with the HPC I wrote up a GitHub <a href="https://github.com/lucidprojects/hpc" target="_blank" rel="noopener noreferrer">README</a> to help others.
            <br /><br />   
            With access to the HPC I was able to run the typical python scripts to train my models and create the latent spacewalks.  Pytorch scripts and many great resources by Derrick Schultz found on his <a href="https://github.com/dvschultz/stylegan2-ada-pytorch/blob/main/SG2_ADA_PyTorch.ipynb" target="_blank" rel="noopener noreferrer">Github</a>.
            <br /><br />  
            <br /><br />              
            </h5>
        </GridItem>
      </GridContainer>  




    </div>
  </div>  
  );
}
