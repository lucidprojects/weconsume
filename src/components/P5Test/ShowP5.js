import React from 'react'
import Button from "components/CustomButtons/Button.js";


const ShowP5Button = (props) => {
  return <Button color="primary" type="submit" value="ShowP5" onClick={props.setP5State}>{props.val}</Button>
}

export default ShowP5Button