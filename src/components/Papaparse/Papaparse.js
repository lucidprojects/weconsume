import React, {useState, useEffect} from "react";
import Papa from 'papaparse';

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
  if (co2eD) { co2eD.innerHTML = "Daily CO2e: " + data[0].co2edaily + "kg";
    console.log(`just got co2eD val of ${co2eD}`);
  }
  document.getElementById("dailyavg").innerHTML = data[0].co2edailyavg;
  document.getElementById("annualavg").innerHTML = annualco2e.toFixed(2);
  
  


}

// const [renderShowInfo, updateShowInfo] = useState(new Date()); // default value can be anything you want

//   useEffect(() => {
//     setTimeout(() => updateShowInfo(new Date(), console.log("here")), 5000);
//   }, [renderShowInfo]);


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

