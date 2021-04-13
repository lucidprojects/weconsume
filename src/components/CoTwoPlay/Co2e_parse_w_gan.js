import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import ReactPlayer from "react-player";

const MYSHEET =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQLNYCe1yagGCePlBPasi2bjAGc3X4cPIeAxJPpegHjCdnJ7bRBRLZkqbSGvWyymACFbiABvhzzwRzK/pub?gid=871249801&single=true&output=csv";

const TESTSHEET =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQLNYCe1yagGCePlBPasi2bjAGc3X4cPIeAxJPpegHjCdnJ7bRBRLZkqbSGvWyymACFbiABvhzzwRzK/pub?gid=1243371662&single=true&output=csv";

var prevVal = 0;
var myCo2e;
let prevTime;
let updateTime;
let wasUpdated = false;
let co2Thresh = 5;
let url;

const ranUpdate = () => {
  updateTime = new Date();
  console.log(`papaparse ran update ${myCo2e} != ${prevVal} @ ${updateTime}`);
  prevTime = updateTime;
  wasUpdated = true;
};

const checkUpdate = () => {
  if (wasUpdated) {
    console.log(`papaparse ran ${prevVal} = ${myCo2e}`);
    wasUpdated = false;
  } else {
  }
};

export function Co2Gan() {
  const [rows, setRows] = useState([]);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setInterval(() => {
      // setTimeout(() => {
      //setRows(0);
      setSeconds(seconds => seconds + 1);
      Papa.parse(TESTSHEET, {
        download: true,
        header: true,
        complete: data => {
            setRows(data.data[0].co2edaily)
            // (myCo2e = data.data[0].co2edaily)
            // prevVal != myCo2e ? ranUpdate() : checkUpdate()
            // (prevVal = myCo2e);
        }
      });
    }, 5000);
  }, []);

  return (
    <div>
      <div>{JSON.stringify(rows)}</div>
      {/* { window.clearInterval(timer)} */}
      <div>{rows}</div>
      <div>
        {(rows >= co2Thresh) ? rows + ` greater than ${co2Thresh}` : rows + ` less than ${co2Thresh}`}
      </div>
      <div className="hide">
        {myCo2e < co2Thresh ? url = require("assets/video/apocogan_40s.mp4") : url = require("assets/video/waterfall.mp4")}{" "}
      </div>
      {myCo2e ? (
        <ReactPlayer
          className="widescreen2"
          url={url}
          playing={true}
          volume={0}
          muted={true}
          loop={true}
          width="100%"
          height="auto"
        />
      ) : (
        <h3>Calculating potential future...</h3>
      )}
    </div>
  );
}
