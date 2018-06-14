import * as React from "react";
import { Route, Switch } from "react-router-dom";
import "./scss/App.scss";

import Display from "./components/pages/display";
import Login from "./components/pages/login";
import Menu from "./components/pages/menu";
import Order from "./components/pages/order";
import OrderList from "./components/pages/orderlist";
import Profile from "./components/pages/profile";
import Request from "./components/pages/request";
import Setting from "./components/pages/setting";

class App extends React.Component {
  public render() {
    return (
      <div className="full-page">
        {/* TODO: To move each page container into common space */}
        <Switch>
          <Route exact={true} path="/" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route exact={true} path="/order" component={OrderList} />
          <Route path="/order/:orderId" component={Order} />
          <Route path="/menu" component={Menu} />
          <Route path="/request" component={Request} />
          <Route path="/setting" component={Setting} />
          <Route path="/display" component={Display} />
          <Route path="/request" component={Request} />
        </Switch>
      </div>
    );
  }
}

export default App;
