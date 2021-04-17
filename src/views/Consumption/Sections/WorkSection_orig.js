import React from "react";
import ReactDOM from 'react-dom';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

// export class MyForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       mycar: 'Volvo'
//     };
//   }
//   render() {
//     return (
//       <form>
//       <select value={this.state.mycar}>
//         <option value="Ford">Ford</option>
//         <option value="Volvo">Volvo</option>
//         <option value="Fiat">Fiat</option>
//       </select>
//       </form>
//     );
//   }
// }

// ReactDOM.render(<MyForm />, document.getElementById('root'));




export default function WorkSection() {
  const classes = useStyles();

  const [travel, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <div className={classes.stats}>
            <h2 className={classes.title}>Avg Per Capita CO2 Emissions in the US <br/>are ≈ 16.2 metric tons</h2>
            <h2 className={classes.title}>By 2030 this needs to be 3.3mt <br/> By 2050 this needs to drop to 1.5mt</h2>
          </div>
          <h2 className={classes.title}>What are your daily emissions?</h2>
          <h4 className={classes.description}>
            Input your daily consumption behavior to get a rough estimate of your emissions.
          </h4>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Did you travel? How far?"
                  id="travel"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                {/* <CustomInput
                  labelText="Travel mode (car, transit, walk, bike)"
                  id="travel_mode"
                  formControlProps={{
                    fullWidth: true
                  }}
                  
                /> */}
                {/* <InputLabel id="demo-simple-select-autowidth-label">Travel mode (car, transit, walk, bike)</InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select"
                  value={travel}
                  onChange={handleChange}
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="" disabled>
                    None
                  </MenuItem>
                  <MenuItem value={"car"}>car</MenuItem>
                  <MenuItem value={"transit"}>transit</MenuItem>
                  <MenuItem value={"walk"}>walk</MenuItem>
                  <MenuItem value={"bike"}>bike</MenuItem>
                </Select> */}
                <FormControl className={classes.formControl} fullWidth={true}>
                  <InputLabel id="demo-controlled-open-select-label">Travel mode (car, transit, walk, bike)</InputLabel>
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    value={travel}
                    onChange={handleChange}
                    label="Travel mode (car, transit, walk, bike)"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                  <MenuItem value={"car"}>car</MenuItem>
                  <MenuItem value={"transit"}>transit</MenuItem>
                  <MenuItem value={"walk"}>walk</MenuItem>
                  <MenuItem value={"bike"}>bike</MenuItem>
                  </Select>
                </FormControl>


                {/* <FormHelperText>Travel mode (car, transit, walk, bike)</FormHelperText> */}
              </GridItem>
               <GridItem xs={12} sm={12} md={6}>
                {/* <CustomInput
                  labelText="Diet (meat, meat/nobeef, vegetarian, vegan)"
                  id="diet"
                  formControlProps={{
                    fullWidth: true
                  }}
                /> */}
                <FormControl className={classes.formControl} fullWidth={true}>
                  <InputLabel id="demo-controlled-open-select-label">Diet (meat, no beef, vegetarian, vegan)</InputLabel>
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    value={travel}
                    onChange={handleChange}
                    label="Diet (meat, no beef, vegetarian, vegan)"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                  <MenuItem value={"meat"}>meat</MenuItem>
                  <MenuItem value={"nobeef"}>meat / nobeef</MenuItem>
                  <MenuItem value={"veggie"}>vegetarian</MenuItem>
                  <MenuItem value={"vegan"}>vegan</MenuItem>
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Typical energy bills $ amt (electric + gas + etc)"
                  id="energy"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                {/* <CustomInput
                  labelText="Waste? 1 garbage, 1 recycle, or more "
                  id="waste"
                  formControlProps={{
                    fullWidth: true
                  }}
                /> */}
                <FormControl className={classes.formControl} fullWidth={true}>
                  <InputLabel id="demo-controlled-open-select-label">Waste? 1 garbage, 1 recycle, or more</InputLabel>
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    value={travel}
                    onChange={handleChange}
                    label="Waste? 1 garbage, 1 recycle, or more"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                  <MenuItem value={"garbage"}>1 bag garbage</MenuItem>
                  <MenuItem value={"recycle"}>1 bag recycle</MenuItem>
                  <MenuItem value={"more"}>more</MenuItem>
                  </Select>
                </FormControl>
              </GridItem>
              <CustomInput
                labelText="Thoughts?"
                id="thoughts"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                inputProps={{
                  multiline: true,
                  rows: 5
                }}
              />
              <GridItem xs={12} sm={12} md={4}>
                <Button color="primary">Submit</Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
