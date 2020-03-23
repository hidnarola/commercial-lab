import React, { Component } from "react";
import Notifications from "./components/Notifications/Notifications";
import Dashboard from "./components/Dashboard/Dashboard";
import Overview from "./components/Overview/Overview";
import Recommendations from "./components/Recommendations/Recommendations";
import Compaigns from "./components/Compaigns/Compaigns";
import AdGroups from "./components/AdGroups/AdGroups";
import ProductGroups from "./components/ProductGroups/ProductGroups";
import AddExtensions from "./components/AddExtensions/AddExtensions";
import LandingPage from "./components/LandingPage/LandingPage";
import Keywords from "./components/Keywords/Keywords";
import Audiences from "./components/Audiences/Audiences";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const routesCode = [
  { path: "/", exact: true, component: Dashboard },
  { path: "/notifications", component: Notifications },
  { path: "/overview", component: Overview },
  { path: "/recommendations", component: Recommendations },
  { path: "/compaigns", component: Compaigns },
  { path: "/adGroups", component: AdGroups },
  { path: "productGroups", component: ProductGroups },
  { path: "/addExtensions", component: AddExtensions },
  { path: "/landingPage", component: LandingPage },
  { path: "/keywords", component: Keywords },
  { path: "/audiences", component: Audiences }
];

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {routesCode.map(route => (
            <Route {...route} />
          ))}
        </Switch>
      </Router>
    );
  }
}

export default Routes;
