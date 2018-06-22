// Importing modules
import * as React from "react";
import { IPureOrder } from "src/modules";

export default class OrderCard extends React.Component<IPureOrder> {
    constructor(props: IPureOrder) {
        super(props)
    }
    public render() {
        return (
            <div className="order-card-container">
                <div className="order-header-container">
                    <span className="order-id">{this.props.orders_id}</span>
                    <div className="order-button">
                        <span className="order-confirmed">DONE</span>
                    </div>
                </div>
                <div className="order-item-container">
                    {this.props.orderItems.map((item, index) => (
                        <div className="order-item-line">
                            <div className="order-item-name-container">
                                <span className="order-item-name">{item.itemName}</span>
                            </div>
                            <div className="item-mods-container">
                                <div className="mods-icon">1</div>
                                <div className="mods-icon">2</div>
                                <div className="mods-icon">3</div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        )
    }

}

