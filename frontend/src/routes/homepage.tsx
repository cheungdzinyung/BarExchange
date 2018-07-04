import * as React from "react";
import { Switch, Route } from "react-router-dom";

// import LandingPage from "src/Page/LandingPage/LandingPage";
import LandingPageNew from "src/Page/LandingPageNew/LandingPageNew";

export default class HomepageRoutes extends React.Component {
  public render() {
    return (
      <Switch>
        <Route path="/" exact={true} component={LandingPageNew} />
      </Switch>
    );
  }
}
