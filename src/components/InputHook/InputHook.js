import { useState } from "react";

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  //let newValue = useState('');

  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: event => {
        // console.log(event.target.value);
        // let tempVal = event.target.value + 2;
        setValue(event.target.value);
        // setValue(tempVal);
      }
    }
  };
};