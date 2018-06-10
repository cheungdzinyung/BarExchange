// Importing modules
import { Card, Elevation } from "@blueprintjs/core";
import * as React from "react";

// Importing components
import OrderBanner from "../share/orderbanner";
import Usermenu from "../share/usermenu";

// Importing static assets
import checkIcon from "../../icons/check.svg";
import headerImg from "../../icons/orders.svg";

// Importing fake data
import { orderList } from "../fakedata";

interface IPureOrder {
  orderNumber: number;
  amount: number;
  orderTime: number;
  isPaid: boolean;
}

interface IPureOrdersProps {
  listOfOrder: IPureOrder[];
}

interface IPureOrdersStates {
  listOfOrder: IPureOrder[];
}

export default class Orders extends React.Component<
  IPureOrdersProps,
  IPureOrdersStates
> {
  constructor(props: IPureOrdersProps) {
    super(props);

    this.state = {
      listOfOrder: orderList.listOfOrder
    };
  }

  public render() {
    return (
      <div className="page-content-container">
        <OrderBanner
          displayName="Ivan"
          tableNumber={3}
          image={headerImg}
          status="Order"
          statusNumber={1326}
        />
        {this.state.listOfOrder.map((indOrd, index) => (
          <Card
            className="order-cards"
            interactive={true}
            elevation={Elevation.TWO}
          >
            <div className="top">
              <div className="order-details">
                <h3>Order #{indOrd.orderNumber}</h3>
                <p>Total Amount: ${indOrd.amount}</p>
                <p>Ordering time: {indOrd.orderTime}</p>
              </div>
              {indOrd.isPaid ? (
                <img src={checkIcon} className="order-icon" alt="" />
              ) : (
                <br />
              )}
            </div>
            {!indOrd.isPaid && (
              <div>
                <hr />
                <button className="paynow-button">
                  <span>Pay Now</span>
                </button>
              </div>
            )}
          </Card>
        ))}
        <Usermenu />
      </div>
    );
  }
}
