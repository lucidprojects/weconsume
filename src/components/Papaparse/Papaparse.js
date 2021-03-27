import React from "react";
import Papa from 'papaparse';

// import Gan2Play from "components/Gan2Play/Gan2Play.js";
import GanToPlay from "components/GanToPlay/GanToPlay.js";

const MYSHEET = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQLNYCe1yagGCePlBPasi2bjAGc3X4cPIeAxJPpegHjCdnJ7bRBRLZkqbSGvWyymACFbiABvhzzwRzK/pub?gid=871249801&single=true&output=csv";

let ganVid;
let myGan;
let co2eD;
let co2eDVar;

const ShowInfo = (props) => {
  
  let data = props.data
  let annualco2e =  (data[0].co2edailyavg * 365) / 1000;
  console.log(`annualco23 ${annualco2e}`);
  co2eD = document.getElementById("co2e");
  if (co2eD) co2eD.innerHTML = "Daily CO2e: " + data[0].co2edaily + "kg";
  document.getElementById("dailyavg").innerHTML = data[0].co2edailyavg;
  document.getElementById("annualavg").innerHTML = annualco2e.toFixed(2);
  
  // return <GanToPlay co2eD={12}/>
        //  <GanToPlay co2eD={2}/>


  // return (

  // )

  const WhichGan = () => {
   console.log("Papa WhichGan func data = " + data[0].co2edaily);
    if (data[0].co2edaily){
      console.log(`I got co2edaily data ${data[0].co2edaily}`);
      //  return <GanToPlay co2eD={data[0].co2edaily} />
      return <GanToPlay co2eD={12} />
    }
  }
  WhichGan(data[0].co2edaily);
  
}


class Papaparse extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Papadata: [],
    };
  }

  componentDidMount() {
    Papa.parse(MYSHEET, {
    download: true,
    header: true,
    complete: ShowInfo
    })
    
  }

  render() {
    return null;
  }

}

export default Papaparse;

