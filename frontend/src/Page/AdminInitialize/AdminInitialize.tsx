// Importing modules from library
import * as React from "react";
import * as History from "history";

// Importing styling and static assets
import "./AdminInitialize.scss";

// Importing presentation components
import { Spinner, Intent } from "@blueprintjs/core";

// redux
import { connect } from "react-redux";
import { IRootState } from "src/redux/store";
import { getUserProfileByUserToken } from "src/redux/mobile/actions/actions_user";
import { getAllOrders } from "src/redux/desktop/actions/actions_bartender";
import { getEntireMenu } from "src/redux/desktop/actions/actions_manager";


// States and Props
interface IInitializeProps {
  // handling redirect
  history: History.History;
  // init
  isAuth: boolean;

  getEntireMenu: () => void;
  menuReady: boolean;

  allOrders: any;
  allOrdersReady: boolean;
  getAllOrders: () => void;

  userProfile: any;
  userProfileReady: boolean;
  staffAPIErr: string;
  getUserProfileByUserToken: () => void;
}

const mapStateToProps = (state: IRootState) => {
    return {
      isAuth: state.staff.staffInit.isAuth,
      menuReady: state.staff.manager.menuReady,
      userProfileReady: state.customer.user.userProfileReady,
      userProfile: state.customer.user.userProfile,
      allOrders: state.staff.bartender.allOrders,
      allOrdersReady: state.staff.bartender.allOrdersReady,
      staffAPIErr: state.staff.staffInit.staffAPIErr
    };
  };
  
  const mapDispatchToProps = (dispatch: any) => {
    return {
      getEntireMenu: () => {
        dispatch(getEntireMenu());
      },
      getUserProfileByUserToken: () => {
        dispatch(getUserProfileByUserToken());
      },
      getAllOrders: () => {
        dispatch(getAllOrders());
      }
    };
  };

class PureInitialize extends React.Component<IInitializeProps, {}> {
  constructor(props: IInitializeProps) {
    super(props);
  }

  public componentDidMount() {
    if (localStorage.getItem("dealingRoomToken")) {
      // fetch entireMenu , set categories[]
      this.props.getEntireMenu();
      // fetch ordersList
      this.props.getAllOrders();
      // fetch user data
      this.props.getUserProfileByUserToken();
    }
  }

  public componentDidUpdate() {
    if (this.props.staffAPIErr !== "GET_ENTIRE_MENU_SUCCESS") {
      this.props.getEntireMenu();
    }
    if (this.props.staffAPIErr !== "GET_ORDERS_BY_USER_TOKEN_SUCCESS") {
      this.props.getAllOrders();
    }
    if (this.props.staffAPIErr !== "GET_USER_PROFILE_BY_USER_TOKEN_SUCCESS") {
      this.props.getUserProfileByUserToken();
    }
    if (
      this.props.menuReady &&
      this.props.userProfileReady &&
      this.props.allOrdersReady &&
      this.props.userProfile.role !== "customer"
    ) {
      this.props.history.push("/admin/pendingorders");
    }
  }

  public render() {
    return (
      <div className="spinner-container">
        <Spinner className="spinner" intent={Intent.WARNING} />
      </div>
    );
  }
}


const Initialize = connect(
  mapStateToProps,
  mapDispatchToProps
)(PureInitialize);

export default Initialize;
