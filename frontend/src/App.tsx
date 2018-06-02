import * as React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import "./scss/App.scss";

import Login from "./components/pages/login";
import Payment from './components/pages/payment';
import Profile from "./components/pages/profile";
import Setting from "./components/pages/setting";

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="full-page">
          <Switch>
            <Route exact={true} path="/" component={Login} />
            <Route path="/profile" component={Profile} />
            <Route path="/order" component={Profile} />
            <Route path="/payment" component={Payment} />
            <Route path="/setting" component={Setting} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
