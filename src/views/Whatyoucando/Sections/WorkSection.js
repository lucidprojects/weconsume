import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={12}>
          <h2>Learnings and takeaways:</h2>
          <h5 className={classes.description}>
            Overall this project has been a sobering experience. Illuminating the stark reality of the world I’ve brought my son into.
<br /><br />
As a relatively conscious consumer, how does my consumption behavior impact the system at scale?
<br /><br />
Throughout this project and at the time of writing, my annual emissions are ≈ 3.88mt with a daily average of ≈ 10.64kg. So I have met my goal. But what does consumption behavior like mine look like at scale? Quantifying my actions over the last month, I’ve realized just how much we consume and how much we emit.
<br /><br />
I think the unique situation of being in school and staying home most days, combined with not being able to do many pre-pandemic activities, is the only reason I have met the 4.5mt goal.
<br /><br />
Simple changes in consumption such as purchasing, traveling (even by bike), and taking out the garbage can tip the scales and put me over my goal. Drastic changes are required for individuals to lower their emissions to 1.5mt by 2050 if it’s even possible.
<br /><br />
But having said that, would it even make a dent?
<br /><br />
Looking at the US alone, there are 330 million people. If the per capita emissions are 16.2 mt, and if 1 million people consumed like me, or 100 million, would that shift the needle?
<br /><br />
One hundred million would be a 30% shift in behavior but would only drop the per capita carbon emissions to 13.07mt. A 23% decrease but still far from where we need to be.
<br /><br />
Recent <a href="https://www.rapidtransition.org/resources/cambridge-sustainability-commission/" target="_blank">articles</a> and <a href="https://www.rapidtransition.org/wp-content/uploads/2021/04/Cambridge-Sustainability-Commission-on-Scaling-behaviour-change-report.pdf" target="_blank">studies</a> suggest that the wealthiest 1% DOUBLE the combined carbon emissions of the poorest 50%. The study found that the richest 1% need to lower their carbon emissions by 30%, and the poorest 50% could even increase theirs by a factor of 3.
<br /><br />
Beyond that, the study points to the synergistic relationship between the two groups changing individual behavior and how those changes combined with systemic policy changes can be positively self-reinforcing.
<br /><br />
How do we all become climate activists?<br />
There are numerous sources of climate activism information online.
<br /><br />
An excellent place to start is Wired Magazine’s article from 2020, <a href="https://www.wired.co.uk/article/how-to-fight-climate-change-2020" target="_blank">10 things you can do to help fight the climate crisis in 2020</a>.
<br /><br />
It highlighted things we can all do right now to make changes in our behavior, from diet to travel, to be a CONSCIOUS CONSUMER. We have the power to change, and it has a contagious effect.
<br /><br />
From there <a href="https://www.zerowastewisdom.com/post/how-to-become-a-more-engaged-environmental-activist" target="_blank">Zerowastewisdom.com</a> also has a great list of 10 things to become more engaged:<br />
1) Read books about the issue from diverse perspectives.<br />
2) Attend local events to learn about the issue, hosted by diverse groups.<br />
3) Volunteer with local organizations making changes.<br />
4) Donate financially to support groups when you cannot volunteer your time.<br />
5) SPEAK UP!<br />
6) VOTE and encourage others to vote.<br />
7) Listen to podcasts, audio books, and TedTalks on the subject.<br />
8) Attend non-violent protests to show your support.<br />
9) Call your representatives - at all levels of the government!<br />
10) Practice what you preach.<br /><br />

And to go further, there are even things like the Terra.go <a href="https://www.terra.do/climate-change-learning-for-action" target="_blank">Climate Change fellowship</a>.  
<br /><br />

<h2>We can drive change, but it starts with us and the time is now!</h2>
<br /><br /><br /><br />
          </h5>
          
        </GridItem>
      </GridContainer>
    </div>
  );
}
