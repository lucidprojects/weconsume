import React, { useState, useEffect } from "react";
import Papa  from 'papaparse';

const formateDate = date => {
  // here you should formate the date to display it the way you want
  // e.g show it in minutes
  // e.g. use momentjs
  return parseInt(date / 60000);
};


const MYSHEET = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQLNYCe1yagGCePlBPasi2bjAGc3X4cPIeAxJPpegHjCdnJ7bRBRLZkqbSGvWyymACFbiABvhzzwRzK/pub?gid=871249801&single=true&output=csv";

let co2eD;

function useGoogleSheetData(url){
  const [rows, setRows] = useState([]);
  useEffect(() => {
    Papa.parse(url, {
          download: true,
          header: true,
          complete: function(results) {
            setRows(results.data.co2edailyavg);
          }
  }, [url]);
  return rows;
  });
}

// const myVar = useGoogleSheetData(MYSHEET);
// console.log(`myVar = ${myVar}`);

// const ShowInfo = (props) => {
  
//   let data = props.data
//   let annualco2e =  (data[0].co2edailyavg * 365) / 1000;
//   console.log(`annualco23 ${annualco2e}`);
//   co2eD = document.getElementById("co2e");
//   if (co2eD) { co2eD.innerHTML = "Daily CO2e: " + data[0].co2edaily + "kg";
//     console.log(`just got co2eD val of ${data[0].co2edaily}`);
//   }
//   document.getElementById("dailyavg").innerHTML = data[0].co2edailyavg;
//   document.getElementById("annualavg").innerHTML = annualco2e.toFixed(2);
  
  
// }

// class Papaparse extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       Papadata: [],
//     };
//   }

//   componentDidMount() {
//     Papa.parse(MYSHEET, {
//     download: true,
//     header: true,
//     complete: ShowInfo
//     })
    
//   }

//   render() {
//     return null;
//   }

// }

export function Co2eUpdateParse() {
  const [modifiedDate] = useState(new Date()); // default value can be anything you want
  const [fakeCurrentDate, setFakeCurrentDate] = useState(new Date()); // default value can be anything you want

  const myVar = useGoogleSheetData(MYSHEET);
  // console.log(`myVar = ${myVar}`);


  useEffect(() => {
    setTimeout(() => setFakeCurrentDate(new Date()), 60000);
  }, [fakeCurrentDate]);

  return (
    <div className="Co2eUpdate">
      <h1>
        {console.log(`myVar = ${myVar}`)}
        File modified {formateDate(fakeCurrentDate - modifiedDate)} minutes ago
        Does this work {myVar}
      </h1>
    </div>
  );
}
