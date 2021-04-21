import React, { useEffect, useState } from 'react';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Select from 'react-select';
// import P5Gan from 'components/P5Test/P5gan'
import P5Gan from 'components/P5Test/P5gan_WindowWidth'
import ShowP5Button from 'components/P5Test/ShowP5'

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

import { useInput } from 'components/InputHook/InputHook';

let co2Calc, annualCo2, winWidth;
const useStyles = makeStyles(styles);

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

const WindowDims = () => {
  const { height, width } = useWindowDimensions();
  winWidth = width;
  return (
    
    <div>
      {/* width: {width} ~ height: {height} */}
    </div>
  );
};




export default function ConsumptionForm() {
 const classes = useStyles();

  const { value:travel, bind:bindTravel} = useInput('');
  const { value:purchase, bind:bindPurchase} = useInput('');
  const [selectedMode, setSelectedModeValue] = useState(0);
  const [selectedDiet, setSelectedDietValue] = useState(0);
  const [selectedWaste, setSelectedWasteValue] = useState(0);

  const [p5State, setP5State] = useState('hide')

  const triggerShowP5 = () => {
    setP5State('show')
  }

  const clearTravel = () =>{
    if(co2Calc){setP5State('hide')}
  }

  const clearPurchase= () =>{
    if(co2Calc){setP5State('hide')}
  }

  // handle onChange event of the dropdown
  const handleModeChange = e => {
    setSelectedModeValue(e.value);
    if(co2Calc){setP5State('hide')}
  }

   const handleDietChange = e => {
    setSelectedDietValue(e.value);
    if(co2Calc){setP5State('hide')}
  }

   const handleWasteChange = e => {
    setSelectedWasteValue(e.value)
    if(co2Calc){setP5State('hide')}
  }
  

  let updateMyVal = (travel, purchase, selectedMode, selectedDiet, selectedWaste) =>{
    let travelVal, dietVal, wasteVal, purchaseVal;
    
    purchaseVal = purchase * 0.05444;
    purchaseVal = purchaseVal.toFixed(2);

    if(selectedMode) {
       if(selectedMode === "drive"){
          // console.log(`your travel mode was ${selectedMode} ≈ 440 grams CO2e / mile `);
          travelVal = 440;
        };
       if(selectedMode === "walk") {
          // console.log(`your travel mode was ${selectedMode} ≈ 39 grams CO2e / mile`);
         travelVal = 39;
        };
       if(selectedMode === "transit") {
          // console.log(`your travel mode was ${selectedMode} ≈ 99 grams CO2e / mile`);
         travelVal = 99;
        };
       if(selectedMode === "bike") {
          // console.log(`your travel mode was ${selectedMode} ≈ 99 grams CO2e / mile`);
         travelVal = 29.4;
        };
       if(selectedMode === "fly") {
          // console.log(`your travel mode was ${selectedMode} ≈ 99 grams CO2e / mile`);
         travelVal = 24040;
        };
   
    } 

    if(selectedDiet) {
       if(selectedDiet === "meat"){
          // console.log(`your diet was ${selectedDiet} ≈ 8.20kg CO2e`);
          dietVal = 8.2;
        };
       if(selectedDiet === "noRed") {
          // console.log(`your diet was ${selectedDiet} ≈ 6.21kg CO2e`);
         dietVal = 6.21;
        };
       if(selectedDiet === "vegetarian") {
          // console.log(`your diet was ${selectedDiet} ≈ 4.22kg CO2e`);
         dietVal = 4.22;
        };
       if(selectedDiet === "vegan") {
          // console.log(`your diet was ${selectedDiet} ≈ 3.72kg CO2e`);
         dietVal = 3.72;
        }; 
   
    } 

    if(selectedWaste) {
       if(selectedWaste === "garbage"){
          // console.log(`your waste mode was 1 bag of garbage ≈ 10kg CO2e / per `);
          wasteVal = 10;
        };
       if(selectedWaste === "recycle") {
          // console.log(`your waste mode was 1 bag if recycling ≈ 7kgs CO2e / per`);
         wasteVal = 7;
        };
       if(selectedWaste === "boxes") {
          // console.log(`your waste mode was boxes ≈ 5 grams CO2e / mile`);
         wasteVal = 5;
        };
       if(selectedWaste === "compost") {
          // console.log(`your waste mode was compost ≈ 2.5kg CO2e`);
         wasteVal = 2.5;
        };
       if(selectedWaste === "more") {
          // console.log(`your waste mode was more ≈ 17 CO2e`);
         wasteVal = 17;
        };
       if(selectedWaste === "none") {
          // console.log(`your waste mode was none ≈ 0 CO2e`);
         wasteVal = 0;
        }; 


    } 

    let mkCalc = parseInt(travel) * parseInt(purchase);
    co2Calc = parseFloat(travel) * (travelVal / 1000) + parseFloat(purchase) * purchaseVal + dietVal + wasteVal;
    co2Calc = co2Calc.toFixed(2);
    let tCo2 = parseFloat(travel) * (travelVal / 1000)
    let pCo2 = parseFloat(purchase) * purchaseVal;
    annualCo2 = (co2Calc * 365) / 1000;
    annualCo2 = annualCo2.toFixed(2);
    if(selectedMode !== '') return`≈ ${co2Calc}kg = travel emissions = ${tCo2}kg + purchase emissions ${pCo2}kg + diet emissions ${dietVal}kg + waste emissions ${wasteVal}kg `;
    else return`${mkCalc} = ${travel} * ${purchase}  was !number, but is now`;
    
  } 

  let myVal;

  if(travel && purchase && selectedMode && selectedDiet && selectedWaste) myVal = updateMyVal(travel, purchase, selectedMode, selectedDiet, selectedWaste);

  const modeOptions = [
      { value: 'fly', label: 'fly' },
      { value: 'drive', label: 'drive' },
      { value: 'transit', label: 'transit' },
      { value: 'walk', label: 'walk' },
      { value: 'bike', label: 'bike' }
      
  ]
  const dietOptions = [
      { value: 'meat', label: 'meat' },
      { value: 'noRed', label: 'no red meat' },
      { value: 'vegetarian', label: 'vegetarian' },
      { value: 'vegan', label: 'vegan' }
  ]
  const wasteOptions = [
      { value: 'more', label: 'more' },
      { value: 'garbage', label: '1 bag of garbage' },
      { value: 'recycle', label: '1 bag if recycling' },
      { value: 'boxes', label: 'boxes' },
      { value: 'compost', label: 'compost' },
      { value: 'none', label: 'none' }
  ]

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
       
     <div className={classes.stats}>
            <h2 className={classes.title}>Avg Per Capita CO2 Emissions in the US <br/>are ≈ 16.2 metric tons</h2>
            <h2 className={classes.title}>By 2030 this needs to be 3.3mt <br/> By 2050 this needs to drop to 1.5mt</h2>
          </div>
          <h2 className={classes.title}>What are your emissions?</h2>
          <h4 className={classes.description}>
            Input your estimated average daily consumption behavior to get a rough estimate.
          </h4>
          {co2Calc && <h2 className={classes.title}>Your Annual Emissions ≈ {annualCo2}mt</h2>}
          <h4>Your Daily Emissions: {myVal}</h4>

       <form>
      
      <label>
        Did you travel/commute? How many miles? <br />
        <input className={classes.textInput} type="text" {...bindTravel} onFocus={clearTravel}/>
      </label><br />
       <label>
        How did you travel?<br />
        <Select id="travelMode" options={modeOptions} value={modeOptions.filter(obj => obj.value === selectedMode)} onChange={handleModeChange}/>
      </label><br />
      <label>
        Purchase? How much do you spend daily on average?<br />
        <input className={classes.textInput} type="text" {...bindPurchase} onFocus={clearPurchase}/>
      </label><br />
      <label>
        What is your typical diet?
        <Select id="diet" options={dietOptions} value={dietOptions.filter(obj => obj.value === selectedDiet)} onChange={handleDietChange}/>
      </label><br />
       <label>
        How much waste do you usually throw out per day? (average)
        <Select id="waste" options={wasteOptions} value={wasteOptions.filter(obj => obj.value === selectedWaste)} onChange={handleWasteChange}
        />
      </label><br />
     
      {/* <Button color="primary" type="submit" value="Submit">Generate Your Futurescape GAN?</Button>  */}
    </form>
      <WindowDims />
      {(co2Calc) ?  
      <div>
       
      {p5State === 'hide' && (
        <ShowP5Button setP5State={triggerShowP5} val="Show Your FutureScape GAN"/>
      )}

      {p5State === 'show' && <P5Gan em={co2Calc} width={winWidth}/>}
       </div>
       : <div></div> }

        {/* <P5Test/> */}
        </GridItem>
      </GridContainer>
    </div>
  );
}
