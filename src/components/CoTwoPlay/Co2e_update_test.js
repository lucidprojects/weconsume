import React, { useState, useEffect } from "react";

const formateDate = date => {
  // here you should formate the date to display it the way you want
  // e.g show it in minutes
  // e.g. use momentjs
  return parseInt(date / 60000);
};

export function Co2eUpdate() {
  const [modifiedDate] = useState(new Date()); // default value can be anything you want
  const [fakeCurrentDate, setFakeCurrentDate] = useState(new Date()); // default value can be anything you want

  useEffect(() => {
    setTimeout(() => setFakeCurrentDate(new Date()), 60000);
  }, [fakeCurrentDate]);

  return (
    <div className="Co2eUpdate">
      <h1>
        File modified {formateDate(fakeCurrentDate - modifiedDate)} minutes ago
      </h1>
    </div>
  );
}
