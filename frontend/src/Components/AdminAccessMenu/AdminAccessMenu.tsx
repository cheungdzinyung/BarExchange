// Importing modules from library
import * as History from "history";
import * as React from "react";
import { withRouter } from "react-router";

// Importing styling and static assets
import './AdminAccessMenu.scss';
import logo from "./img/logo.svg";
// Importing menu icons
import glass from "./img/glass.svg";
import info from "./img/info.svg";
import bell from "./img/bell.svg";
import users from "./img/users.svg";

// import redux and friends
import { connect } from "react-redux";
import { IRootState } from "src/redux/store";
import { changePage } from "src/redux/mobile/actions/actions_user";

interface IUserMenuProps {
  history: History.History;
  changePage: (targetPage: string) => void;
}

class AdminSideMenu extends React.Component<IUserMenuProps, {}> {
  constructor(props: IUserMenuProps) {
    super(props);
  }

  public toStockManagement = () => {
    this.props.changePage(`/admin/stock`);
    this.props.history.push(`/admin/stock`);
  };
  public toCurrentOrders = () => {
    this.props.changePage(`/admin/currentorders`);
    this.props.history.push(`/admin/currentorders`);
  };
  public toPendingOrders = () => {
    this.props.changePage(`/admin/pendingorders`);
    this.props.history.push(`/admin/pendingorders`);
  };
  public toUnPaidOrders = () => {
    this.props.changePage(`/admin/unpaidorders`);
    this.props.history.push(`/admin/unpaidorders`);
  };
  public toSpecialEvent = () => {
    this.props.changePage(`/admin/specialEvent`);
    this.props.history.push(`/admin/specialEvent`);
  };

  public render() {
    return (
      <div className="admin-menu">
        <div className="corner">
          <img className="corner-logo" src={logo} alt="" />
          <span className="corner-name">Dealing Room</span>
        </div>
        <div className="menu">
          <div className="menu-section">
            <span className="section-header">Management</span>
            <div className="section-pages">
              <div
                className="section-page-line"
                onClick={this.toStockManagement}
              >
                <img src={glass} alt="" className="page-line-icon" />
                <span className="page-line-text">Stock Management</span>
              </div>
              <div className="section-page-line">
                <img src={users} alt="" className="page-line-icon" />
                <span className="page-line-text">Staff Management</span>
              </div>
              <div className="section-page-line" onClick={this.toSpecialEvent}>
                <img src={bell} alt="" className="page-line-icon" />
                <span className="page-line-text">Special Event</span>
              </div>
            </div>
          </div>
          <div className="menu-section">
            <span className="section-header">Service</span>
            <div className="section-pages">
              <div className="section-page-line" onClick={this.toCurrentOrders}>
                <img src={info} alt="" className="page-line-icon" />
                <span className="page-line-text">Current Orders</span>
              </div>
            </div>
          </div>
          <div className="menu-section">
            <span className="section-header">Bar/Kitchen</span>
            <div className="section-pages">
              <div className="section-page-line" onClick={this.toPendingOrders}>
                <img src={bell} alt="" className="page-line-icon" />
                <span className="page-line-text">Pending Orders</span>
              </div>
            </div>
          </div>
          <div className="menu-section">
            <span className="section-header">Payment</span>
            <div className="section-pages">
              <div className="section-page-line" onClick={this.toUnPaidOrders}>
                <img src={bell} alt="" className="page-line-icon" />
                <span className="page-line-text">Unpaid Orders</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IRootState) => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    changePage: (targetPage: string) => {
      dispatch(changePage(targetPage));
    }
  };
};

const SideMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminSideMenu);

export default withRouter(SideMenu as any);
