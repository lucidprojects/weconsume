import { title } from "assets/jss/material-kit-react.js";

const workStyle = {
  section: {
    padding: "70px 0"
  },
  title: {
    ...title,
    marginBottom: "50px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center"
  },
  description: {
    color: "#999",
    textAlign: "center"
  },
  textCenter: {
    textAlign: "center"
  },
  textArea: {
    marginRight: "15px",
    marginLeft: "15px"
  },
  formControl: {
    margin: "0 0 27px 0",
    paddingTop: "12px",
    position: "relative",
    "& svg,& .fab,& .far,& .fal,& .fas,& .material-icons": {
      color: "#495057"
    }
  },  
  selectEmpty: {
    marginTop: "spacing(2)",
  },

  textInput: {
    alignItems: "center",
    backgroundColor: "hsl(0, 0%, 100%)",
    borderColor: "hsl(0, 0%, 80%)",
    borderRadius: "4px",
    borderStyle: "solid",
    borderWidth: "1px",
    cursor: "default",
    display: "-webkit-box",
    display: "-webkit-flex",
    display: "-ms-flexbox",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    minHeight: "38px",
    outline: "0!important",
    position: "relative",
    width: "100%",
    paddingLeft: "10px"
  
}


};

export default workStyle;
