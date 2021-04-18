import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import styles from "assets/jss/material-kit-react/views/components.js";
// import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/kendall.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 >Tracking and Quantification Methodology:</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <h5 className={classes.description}>
The currently available tools are lacking. Generic inputs and generic outputs give rough estimates at best. With that in mind, I've pulled from a few different sources in an attempt to make things more accurate. 
<br /><br />
Again, per capita, annual emissions in the US are ≈ 16.2 metric tons per adult. Which ultimately, by 2050, we need to drop to 1.5mt. For this project, I set myself the goal of 4.5mt annually, which equals 11.28kg daily.
<br /><br />
Most of the calculations came from the <a href="https://www3.epa.gov/carbon-footprint-calculator/" target="_blank">EPA Carbon Footprint Calculator</a>. They allow you to download an Excel file containing the formulas used in their calculator.
<br /><br />
The primary things I tracked were my travel, spending, utilities, diet, and waste, and I added later machine learning related emissions.
<br /><br />
For travel, most of the tools I found only ask about miles driven, mass transit, and flights taken, but walking, biking, and other modes of transportation also have emissions.
<br /><br />
The modes I tracked in my quantification were: <br />
<a href="https://www.globe.gov/explore-science/scientists-blog/archived-posts/sciblog/index.html_p=186.html" target="_blank">Bike</a> = 29.4g of CO2e per mile <br />
<a href="https://www.globe.gov/explore-science/scientists-blog/archived-posts/sciblog/index.html_p=186.html" target="_blank">Walk</a> = 39g of CO2e per mile <br />
Skate = 30g of co2e per mile (VERY ROUGH ESTIMATE - took a median of bike and walk.)<br />
<a href="https://www.transit.dot.gov/sites/fta.dot.gov/files/docs/PublicTransportationsRoleInRespondingToClimateChange2010.pdf" target="_blank">Train</a> = 99g of CO2e per mile - heavy rail <br />
<a href="https://www.globe.gov/explore-science/scientists-blog/archived-posts/sciblog/index.html_p=186.html" target="_blank">Car</a> = 0.44 kg of CO2e = 440g per mile<br />
<a href="http://blueskymodel.org/air-mile" target="_blank">Fly</a> = 53.3 lbs of CO2e per mile (24040.4 grams)<br />
<br />
Utilities are added as the bills are paid. Daily and annual averages accurately reflect this but the daily emissions on that day are inflated. Emissions derived from the EPA spreadsheet formulas.
<br /><br />
Diet emission values via USDA, sourced from <a href="http://shrinkthatfootprint.com/food-carbon-footprint-diet" target="_blanK">shrinkthatfootprint.com</a>.<br />
<table>
<tr>
<th>diet</th>
<th>tons</th>
</tr>
<tr>
<td>meat</td>
<td>3.3</td>
</tr>
<tr>
<td>avg</td>
<td>2.5</td>
</tr>
<tr>
<td>no beef</td>
<td>1.9</td>
</tr>
<tr>
<td>vegetarian</td>
<td>1.7</td>
</tr>
<tr>
<td>vegan</td>
<td>1.5</td>
</tr>
</table>
<br/>
As a vegetarian who doesn't drive and is not flying, one of the most significant contributors to my consumption is general purchase behavior. This, unfortunately, is probably the least accurate of my consumption tracking. 
<br /><br />
Purchasing behavior is quantified loosely based on GHG protocol's <a href="https://ghgprotocol.org/sites/default/files/standards_supporting/Chapter1.pdf" target="_blank">spend based emissions</a>. The equation, kg CO2e/$, quantifies Spend-based emissions, the emissions factor per unit of value/cost or spend. But that requires me to know the CO2e of each product and its supply chain. To simplify things, I use a similar formula where I sum up my daily spending and multiply it by the stationary combustion emission factor of natural gas, published by the <a href="https://www.epa.gov/sites/production/files/2015-07/documents/emission-factors_2014.pdf" target="_blank">EPA</a>.
<br /><br />
Waste Emissions are derived from EPA spreadsheet formulas.
<br /><br />
Machine learning emissions are based on the GPU used, hours trained, and grid efficiency of the network. The majority of training work was done on NYU's Greene HPC. Which is said to be one of the top 100 "greenest" supercomputers in the world. [<a href="https://www.nyu.edu/about/news-publications/news/2020/november/GreeneSupercomputer.html" target="_blank">source</a>] Emissions are estimated via the <a href="https://mlco2.github.io/impact/#compute" target="_blank">ML CO2 Impact tool</a>. 
<br /><br />
I am sure many could identify any number of holes and weaknesses in these methods, but it allowed me to pay more attention to my patterns and understand the drastic changes we all need to strive for, if not prepare for.
<br /><br /><br /><br /></h5>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
