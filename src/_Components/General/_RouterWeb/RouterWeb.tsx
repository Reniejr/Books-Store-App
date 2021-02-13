import React, { PureComponent } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

//PERSONAL COMPONENTS IMPORTS
import HomePage from "../../_Pages/0.HomePage/HomePage";

export default class RouterWeb extends PureComponent {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact render={(props) => <HomePage {...props} />} />
        </Switch>
      </Router>
    );
  }
}
