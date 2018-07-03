// Importing modules from library
import * as History from "history";
import * as React from "react";
import { withRouter } from "react-router";

// Importing styling and static assets
import "./AdminAccessMenu.scss";
import menu from "./img/menu.svg";
import orders from "./img/bookmark.svg";
import request from "./img/cart.svg";
import setting from "./img/gear.svg";
import chart from "./img/chart.svg";

// import redux and friends
import { connect } from "react-redux";
import { IRootState } from "src/redux/store";
import { changePage } from "src/redux/mobile/actions/actions_user";

interface IUserMenuProps {
  history: History.History,
  unpaidOrders: number,
  changePage: (targetPage: string) => void,
}

class PureUserMenu extends React.Component<IUserMenuProps, {}> {
  constructor(props: IUserMenuProps) {
    super(props);
  }

  public toPerformance = () => {
    this.props.changePage(`/customer/performance`);
    this.props.history.push(`/customer/performance`);
  };
  public toOrder = () => {
    this.props.changePage(`/customer/order`);
    this.props.history.push(`/customer/order`);
  };
  public toPayment = () => {
    this.props.changePage(`/customer/payment`);
    this.props.history.push(`/customer/payment`);
  };
  public toSetting = () => {
    this.props.changePage(`/customer/setting`);
    this.props.history.push(`/customer/setting`);
  };
  public toMenu = () => {
    this.props.changePage(`/customer/menu`);
    this.props.history.push(`/customer/menu`);
  };
  public toRequest = () => {
    this.props.changePage(`/customer/request`);
    this.props.history.push(`/customer/request`);
  };

  public render() {
    return (
      <div className="user-menu">
        <div className="menu-item" onClick={this.toPerformance}>
          <img className="user-menu-icon" src={chart} alt="receipt icon" />
          <span className="menu-name">Profile</span>
        </div>
        <div className="menu-item" onClick={this.toOrder}>
          <div className="count">
            <span className="count-digit">{this.props.unpaidOrders}</span>
          </div>
          <img className="user-menu-icon" src={orders} alt="receipt icon" />
          <span className="menu-name">Orders</span>
        </div>
        <div className="menu-item">
          <img className="user-menu-icon" src={menu} alt="menu icon" onClick={this.toMenu} />
          <span className="menu-name">Menu</span>
        </div>
        <div className="menu-item" onClick={this.toRequest}>
          <img className="user-menu-icon" src={request} alt="" />
          <span className="menu-name">Request</span>
        </div>
        <div className="menu-item" onClick={this.toSetting}>
          <img className="user-menu-icon" src={setting} alt="gear" />
          <span className="menu-name">Setting</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IRootState) => {
  return {
    unpaidOrders: state.customer.orders.unpaidOrders,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    changePage: (targetPage: string) => {
      dispatch(changePage(targetPage));
    },
  }
}

const UserMenu = connect(mapStateToProps, mapDispatchToProps)(PureUserMenu);

export default withRouter(UserMenu as any);
