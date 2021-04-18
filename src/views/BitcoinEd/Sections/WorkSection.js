import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/components.js";
// import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="flex-start">
        <GridItem cs={12} sm={12} md={12}>
          <h2>Bitcoin and blockchain:</h2>
          <h5 className={classes.description}>
            
The We Consume project uses a private Bitcoin blockchain as an immutable base layer to track my consumption patterns. Data from the blockchain is publicly exposed on this site allowing for others to critique my behavior. 
<br /><br />
While my private Bitcoin network is running on a minimal footprint, below are some thoughts regarding the environmental impact of Bitcoin.
 
<br /><br />
Bitcoin and blockchain technologies have the potential to alter how we view and exchange data greatly. Use cases from boosting transparency, simplifying clean energy trading, enforcing commitments, and enhancing emissions reporting, and eliminating double-counting names but a few.
 
<br /><br />
The often publicized view that Bitcoin is bad for the environment, is a misconception. The potential societal benefits greatly away any potential harm. This is highlighted by comparison to energy usages of current financial systems, other sectors like <a href="https://www.nrdc.org/sites/default/files/home-idle-load-IP.pdf" target="_blank">always on electronics</a> , <a href="https://www.danheld.com/blog/2019/1/5/pow-is-efficent" target="_blank">gold mining</a>, and <a href="https://www.electricchoice.com/blog/electricity-cost-and-consumption-christmas-lights-and-decorations-in-america/" target="_blank">christmas lights</a>. It has been discussed in depth <a href="https://www.danheld.com/blog/2019/1/5/pow-is-efficent" target="_blank">here</a>, <a href="https://www.coindesk.com/frustrating-maddening-all-consuming-bitcoin-energy-debate" target="_blank">here</a> and <a href="https://www.forbes.com/sites/rogerhuang/2021/02/16/arguments-that-bitcoin-harms-the-environment-through-wasteful-emissions-miss-the-mark/?sh=6be06cf820a7" target="_blank">here</a>.
 
<br /><br />
For quick comparison, annually the Bitcoin network consumes ≈ 100 tWh, Gold mining ≈ 131 twh plus significant additional negative environmental impact, and US government uses ≈ <a href="https://www.eia.gov/todayinenergy/detail.php?id=40192" target="_blank">268 tWh</a>, <a href="https://fas.org/sgp/crs/natsec/R45832.pdf" target="_blank">77% of which is from the DOD</a> which is widely seen as the <a href="https://www.nationalpriorities.org/blog/2020/05/04/if-us-military-major-polluter-why-not-green-military/" target="_blank">biggest polluter</a> in the world.
 
<br /><br />
While the current global financial system uses ≈ <a href="https://www.danheld.com/blog/2019/1/5/pow-is-efficent" target="_blank">660 tWh</a>.
<br /><br />
A globally accessible, antifragile, trustless, and mathematically proven system with massive potential for societal benefits, dramatically outweighs the consumption.
 
<br /><br />
It's about ROI. Many of the consumers mentioned above use as much or more, and no one gives it a second thought. But we should be examining these things and identifying the value vs. cost.
 </h5>
 
 <h3>Additional Bitcoin reading:</h3>
 <h5 className={classes.description}>
 
<a href="https://theconversation.com/three-ways-blockchain-could-get-the-world-to-act-against-the-climate-crisis-139503" target="_blanK"> Three ways blockchain could get the world to act against the climate crisis.</a><br />
1. Boosting transparency<br />
2. Enforcing commitments<br />
3. Increasing ambition
<br /><br />
<a href="https://www.rics.org/north-america/wbef/megatrends/natural-environment/three-simple-uses-of-blockchain-in-the-fight-against-climate-change/"target="_blanK">Three simple uses of blockchain in the fight against climate change.</a><br />

1. Simplifying clean energy trades<br />
2. Improving the flow of climate finance<br />
3. Enhancing emissions reporting and eliminating double counting
<br /><br />


<a href="https://www.reutersevents.com/sustainability/cookstoves-carbon-markets-how-blockchain-supercharging-sustainability" target="_blanK">From cookstoves to carbon markets: how blockchain is supercharging sustainability.</a> The Climate Ledger Initiative says there are three main benefits of blockchain technology:<br />
1. Data records on a blockchain are immutable through a permanent ledger, increasing transparency<br />
2. Blockchain technology brings trust to peer-to-peer transactions, which is particularly important where regulation is weak, or governance is decentralized.<br />
3. Smart contracts – applications that can automatically execute the terms specified in a contract on a blockchain – increase efficiency and reduce transaction costs.<br />
</h5>

<h3>Why Bitcoin reading:</h3>
 <h5 className={classes.description}>
"Bitcoin is a quiet protest.<br />
It's the idea that inequality is bad. It's the idea that money created out of thin air and handed to a small few to inflate the stock market that is fundamentally wrong. It's the idea homes shouldn't cost a lifetime worth of hours stuck in a cubicle. It's the idea you should be able to send money anywhere in the world within a few minutes." <br/>
<a href="https://medium.com/the-ascent/bitcoin-hitting-100-000-doesnt-matter-many-people-have-missed-the-point-b6360bed7b06" target="_blanK">Medium.com Tim Denning</a>
<br /><br />

"The most obvious, most important realities are the ones that are hardest to see." - David Foster Wallace<br/>
<a href="https://www.microstrategy.com/en/bitcoin/documents/stone-ridge-2020-shareholder-letter" target="_blanK">Stoneridge 2020 Shareholder Letter</a>
<br /><br />
</h5>
<h3>How to Bitcoin reading:</h3>
 <h5 className={classes.description}>
There are a plethora of resources on Bitcoin. One of my favorite go-tos is BitcoinQnA's content.
Starting with the <a href="https://bitcoiner.guide/qna/common/" target="_blanK">Common Q+A</a>
<br /><br />
<br /><br />
</h5>


        </GridItem>
      </GridContainer>
    </div>
  );
}
