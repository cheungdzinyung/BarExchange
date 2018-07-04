// Importing modules
import * as React from "react";

// Importing styling and static assets
import "./CustomerPerformance.scss";

// Importing UI elements
import UserMenu from "src/Components/CustomerAccessMenu/usermenu";
import PageHeader from "src/Components/CustomerPageHeader/pageheader";
import {   IConsumpGraphDataDeceiveAll } from "src/modules";
import UserProfileGraph from "./Graph/CustomerPerformanceGraph";

// Importing fake data
// import { profileConsumptionGraphTest } from "src/fakedata";

// Redux
import { connect } from "react-redux";
import { IRootState } from "src/redux/store";
import { getUserConsumptionByUserToken } from "src/redux/mobile/actions/actions_user";
import { switchUp } from "src/util/utility";

interface IUserPerformanceProps {
  userConsumptionComparison: IConsumpGraphDataDeceiveAll;
  getConsumption: () => void;
}
// interface IUserPerformanceState {
//   processedData: IConsumptionGraphData[];
// }

// Redux
const mapStateToProps = (state: IRootState) => {
  return {
    userConsumptionComparison: state.customer.user.userConsumptionComparison
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getConsumption: () => {
      dispatch(getUserConsumptionByUserToken());
    }
  };
};

class PurePerformance extends React.Component<IUserPerformanceProps, {}> {
  constructor(props: IUserPerformanceProps) {
    super(props);
    this.props.getConsumption();
    // this.state = {
    //   processedData: switchUp(this.props.userConsumptionComparison)
    // };
  }

  public componentDidMount() {
    this.props.getConsumption();
  }

  public render() {
    return (
      <div className="page-content-container">
        <PageHeader header={"Profile"} subHeader={"You are what you eat"} />
        <UserProfileGraph
          data={switchUp(this.props.userConsumptionComparison)}
        />
        <div className="cardd rd-corner">
          <p>Thank you for enjoying our product. We hope to see you again soon.</p>
        </div>
        <UserMenu />
      </div>
    );
  }
}

const Performance = connect(
  mapStateToProps,
  mapDispatchToProps
)(PurePerformance);

export default Performance;
