import { useState, useEffect } from "react";

export const useSelect = initialValue => {
  // const [value, setSelectedValue] = useState(initialValue);
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    // Update the document title using the browser API
    setValue(value);
    
  });


  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: e => {
        setValue(e.value);
        // console.log(value);
        // console.log(`travelMode = ${value}`);
      }
    }

  };
  
  

  
};