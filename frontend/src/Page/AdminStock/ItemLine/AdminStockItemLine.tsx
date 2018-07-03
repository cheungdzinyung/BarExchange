// Importing modules
import * as React from "react";

// Importing styling and static assets
import "./AdminStockItemLine.scss";

// Importing Interfaces
import {
  IMenuItemWithoutFlux,
  IStockManageModalState,
  IUpdateMenuItem
} from "src/modules";

// Importing utility function
import { firstLetterCaps } from "src/util/utility";

// Importing static image assets
import FilledStar from "./img/starfilled.svg";
import UnfilledStar from "./img/starunfilled.svg";
import Menu from "./img/menu.svg";

// Importing temp fake images
// import img from "src/Components/assets/images/categories/squarebeer.jpg";

// redux
import { connect } from "react-redux";
import { IRootState } from "src/redux/store";
import { toggleStockManageModal } from "src/redux/desktop/actions/actions_manager";

interface IPureStockItemLineProps {
  singleItem: IMenuItemWithoutFlux;
  openModal: () => void;
  toggleStockManageModal: (
    stockManageModalState: IStockManageModalState,
    targetItem?: IUpdateMenuItem
  ) => void;
}

interface IStockItemStates {
  isEditMenuOpen: boolean;
}

class PureStockItemLine extends React.Component<
  IPureStockItemLineProps,
  IStockItemStates
  > {
  constructor(props: IPureStockItemLineProps) {
    super(props);
  }

  public editItem = () => {
    this.props.openModal();
    this.props.toggleStockManageModal("update", this.props.singleItem);
  };

  public render() {
    return (
      <div
        className="stock-item-card rd-corner"
        data-productid={this.props.singleItem.items_id}
      >
        <img src={(this.props.singleItem.itemPhoto)} alt="" className="stock-item-img rd-corner" />
        <div className="stock-item-info">
          <span className="stock-item-category">
            {firstLetterCaps(this.props.singleItem.categoryName)}
          </span>
          <div className="stock-item-name-price">
            <span className="stock-item-name">
              {this.props.singleItem.itemName}
            </span>
            <span className="stock-item-price">
              &#36;{this.props.singleItem.currentPrice}
            </span>
          </div>
          <p className="stock-item-description">
            {this.props.singleItem.itemDescription}
          </p>
          <div className="stock-item-price-floor">
            <span className="stock-item-price-floor-text">Price floor:</span>
            <span className="stock-item-price-floor-number">
              &#36;{this.props.singleItem.minimumPrice}
            </span>
          </div>
        </div>
        <div className="stock-item-mod">
          <div className="spec-act">
            <div className="isSpecial">
              <img
                src={
                  this.props.singleItem.isSpecial ? FilledStar : UnfilledStar
                }
                alt="star"
                className="star"
              />
            </div>
            {this.props.singleItem.isActive ? (
              <button className="active-button rd-corner isActive">
                <span className="isActive-button-text">Active</span>
              </button>
            ) : (
                <button className="active-button rd-corner isNotActive">
                  <span className="isActive-button-text">Inactive</span>
                </button>
              )}
          </div>
          <div className="item-edit-menu">
            <img
              src={Menu}
              alt=""
              className="edit-item-icon"
              onClick={this.editItem}
            />
          </div>
        </div>
      </div>
    );
  }
}

// Redux
const mapStateToProps = (state: IRootState) => {
  return {
    stockManageModalState: state.staff.manager.stockManageModalState
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    toggleStockManageModal: (
      stockManageModalState: IStockManageModalState,
      targetItem?: IUpdateMenuItem
    ) => {
      dispatch(toggleStockManageModal(stockManageModalState, targetItem));
    }
  };
};

const StockItemLine = connect(
  mapStateToProps,
  mapDispatchToProps
)(PureStockItemLine);

export default StockItemLine;
