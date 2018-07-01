import * as React from "react";
import { Switch, Route } from "react-router-dom";

import AdminLogin from "src/components/container/desktop/adminlogin";
import Initialize from "src/components/container/desktop/initializeStaff";
import StockManagement from "src/components/container/desktop/stockmanagement";
import CurrentOrders from "src/components/container/desktop/currentorders";
import PendingOrders from "src/components/container/desktop/pendingorders";
import UnpaidOrders from "src/components/container/desktop/unpaidorders";

export default class DesktopRoutes extends React.Component {
  public render() {
    return (
      <Switch>
        <Route exact={true} path="/admin" component={AdminLogin} />>
        <Route exact={true} path="/initializeStaff" component={Initialize} />
        <Route exact={true} path="/stock/" component={StockManagement} />
        <Route exact={true} path="/currentorders" component={CurrentOrders} />
        <Route exact={true} path="/pendingorders" component={PendingOrders} />
        <Route exact={true} path="/unpaidorders" component={UnpaidOrders} />
      </Switch>
    );
  }
}
