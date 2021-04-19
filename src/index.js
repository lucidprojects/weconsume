import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// page views for this site
import Components from "views/Components/Components.js";
import Consumption from "views/Consumption/Consumption.js";
import BitcoinEd from "views/BitcoinEd/BitcoinEd.js";
import MlEd from "views/MlEd/MlEd.js";
import Whatyoucando from "views/Whatyoucando/Whatyoucando.js";
import About from "views/About/About.js";


var hist = createBrowserHistory();

ReactDOM.render(
  // <Router history={hist}>
  <BrowserRouter history={hist}>
    <Switch>
      <Route path="/consumption" component={Consumption} />
      <Route path="/bitcoin" component={BitcoinEd} />
      <Route path="/machinelearning" component={MlEd} />
      <Route path="/whatyoucando" component={Whatyoucando} />
      <Route path="/about" component={About} />
      <Route path="/" component={Components} />


    </Switch>
  {/* </Router>, */}
  </BrowserRouter>,
  document.getElementById("root")
);
