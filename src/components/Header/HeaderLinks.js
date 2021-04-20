/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import Papaparse from "components/Papaparse/Papaparse.js";


import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="/"
          color="transparent"
          className={classes.navLink}
        >
          
          <Papaparse/>
          <i className={classes.socialIcons + " fas fa-globe-africa"} /> CO2e {window.innerWidth > 959 ? ' | Daily Avg:' : ' home'} <span id="dailyavg"></span>{window.innerWidth > 959 ? ' kg | Annual Avg:' : ''} <span id="annualavg"></span>{window.innerWidth > 959 ? 't' : ''} 
          {/* <i className={classes.socialIcons + " fas fa-globe-africa"} /><div> CO2e | Daily Avg: <span id="dailyavg"></span>kg | </div> <div> Annual Avg: <span id="annualavg"></span>t</div> */}
          {/* {window.innerWidth > 959 ? `<i className={classes.socialIcons + " fas fa-globe-africa"} /><div> CO2e | Daily Avg: <span id="dailyavg"></span>kg | </div> <div> Annual Avg: <span id="annualavg"></span>t</div>` : `<i className={classes.socialIcons + " fas fa-globe-africa"} /><div> CO2e </div>`} */}
         
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="EXPLORE"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/consumption" className={classes.dropdownLink}>
              Consumption
            </Link>,
            <Link to="/bitcoin" className={classes.dropdownLink}>
              Bitcoin Education
            </Link>,
            <Link to="/machinelearning" className={classes.dropdownLink}>
              Machine Learning Education
            </Link>,
            <Link to="/whatyoucando" className={classes.dropdownLink}>
              What you can do
            </Link>
            
          ]}
        
        />
      </ListItem>
      
      <ListItem className={classes.listItem}>
        
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/consume_we"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
     
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/we_con_sume/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
