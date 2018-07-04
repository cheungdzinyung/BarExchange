import * as React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "src/Page/CustomerLogin/CustomerLogin";
import Initialize from "src/Page/CustomerInitialize/CustomerInitialize";
import Menu from "src/Page/CustomerMenu/CustomerMenu";
import Order from "src/Page/CustomerOrder/CustomerOrder";
import OrderList from "src/Page/CustomerOrder/CustomerOrderListComponent/CustomerOrderList";
import Performance from "src/Page/CustomerPerformance/CustomerPerformance";
import Request from "src/Page/CustomerRequest/CustomerRequest";
import Setting from "src/Page/CustomerSetting/CustomerSetting";
import PureIntroduction from "src/Page/CustomerWelcomeScreen/CustomerWelcomeScreen";


export default class MobileRoutes extends React.Component {
  public render() {
    return (
      <div>
        <Switch>
          {/* Testing route */}
          <Route path="/customer/" exact={true} component={Login} />
          <Route path="/customer/welcome" exact={true} component={PureIntroduction} />
          <Route path="/customer/initialize" exact={true} component={Initialize} />
          <Route path="/customer/performance" exact={true} component={Performance} />
          <Route path="/customer/order" exact={true} component={OrderList} />
          <Route path="/customer/order/:orderId" exact={true} component={Order} />
          <Route path="/customer/menu" exact={true} component={Menu} />
          <Route path="/customer/request" exact={true} component={Request} />
          <Route path="/customer/setting" exact={true} component={Setting} />
          <Route path="/customer/request" exact={true} component={Request} />
        </Switch>

      </div>
    );
  }
}
