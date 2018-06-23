// Importing modules
import * as React from "react";
import { match } from "react-router-dom";

// Importing UI elements
import { Card, Elevation } from "@blueprintjs/core";

// Importing components
import Usermenu from "../../ui/mobile/usermenu";

// Importing static assets
import paymentTest from "../../assets/images/payment/stripe.png"

// Importing types
// import { IOrder } from "../../modules";

// import redux and friends
import { connect } from "react-redux";
import { IRootState } from "../../../redux/store";
import PageHeader from "src/components/ui/mobile/pageheader";

interface IOrderProps {
  match: match<{ orderId: number }>;
  ordersList: any;
}

interface IOrderState {
  displayName: string,
  orderID: number,
  tableNumber: number,
  thisOrder: any,
  amount: number,

  paymentMethod: string
  // order: IOrder
}

class PureOrder extends React.Component<IOrderProps, IOrderState> {
  constructor(props: IOrderProps) {
    super(props);

    this.state = {
      displayName: "",
      orderID: 0,
      tableNumber: 0,
      thisOrder: { orderItems: "empty" },
      amount: 0,

      paymentMethod: paymentTest,
    }
  }

  public componentWillMount() {
    // if (this.props.redirectTarget === "/order") {
    //   this.props.resetTargetPage();
    // }

    const displayName = this.props.ordersList.displayName;
    const orderID = this.props.match.params.orderId;
    const thisOrder = (this.props.ordersList.orders.find((e: any) => {
      // alert(`${e.orders_id} :${orderID} : ${typeof(e.orders_id)} : ${typeof(orderID)}`)
      // 1 : 1 : num : str
      // alert(`${e.orders_id}` === `${orderID}`)
      // true
      return (`${e.orders_id}` === `${orderID}`);
    }));

    if (thisOrder !== undefined) {
      const tableNumber = thisOrder.table;
      const amount = thisOrder.orderItems.reduce((accu: number, curr: any) => (accu + parseFloat(curr.purchasePrice)), 0);
      this.setState({
        displayName, orderID, tableNumber, thisOrder, amount
      })

    }
  }

  public payment = () => {
    // TODO: stripe, this.state
    return null;
  }

  public render() {
    return (
      <div className="page-content-container">
      <PageHeader header={`Order ${this.state.orderID}`} subHeader="Your wish is our command"/>
        {
          this.state.thisOrder.orderItems !== "empty" ?
            <div>
              {this.state.thisOrder.orderItems.map((line: any, i: number) => (
                <Card
                  key={`order_${i}`}
                  className="order-line"
                  interactive={true}
                  elevation={Elevation.TWO}
                >
                  <span className="order-item">{line.itemName}</span>
                </Card>
              ))}
              <img className="payment-method" src={this.state.paymentMethod} alt="" />
              <Card className="order-summary" elevation={Elevation.TWO}>
                <button className="payment-button" onClick={this.payment}>
                  <span className="payment-header">Pay Now</span>
                  <span className="payment-amount">HK&#36; {this.state.amount}</span>
                </button>
              </Card>
            </div>  : <div />
        }
        <Usermenu />
      </div>
    );
  }
}

const mapStateToProps = (state: IRootState) => {
  return {
    ordersList: state.customer.orders.ordersList,
  }
}

// const mapDispatchToProps = (dispatch: any) => {
//   return {
//     }
//   }
// }

const Order = connect(mapStateToProps, {})(PureOrder);

export default Order;