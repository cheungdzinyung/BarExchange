// Importing modules from library
import * as React from "react";

// menu filter
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import MenuSlider from "./menuSlider";

// Importing styling and static assets
import "./CustomerMenu.scss";

// redux
import { connect } from "react-redux";
import { IRootState } from "src/redux/store";
import {
  addToCurrentOrder,
  getEntireMenu
} from "src/redux/mobile/actions/actions_orders";

// Import UI elements
import { AppToaster } from "src/Components/ToastAlert/toast";
import { Intent } from "@blueprintjs/core";
import UserMenu from "src/Components/CustomerAccessMenu/usermenu";
import MenuItem from "./ItemCard/menuitem";

// import { API_SERVER } from "src/redux/store";

// Importing interfaces
import {
  IRequestItem,
  IMenuCategoryWithFlux,
  IMenuItemWithFlux
} from "src/modules";

// socket
import { store } from "src/redux/store";
import PageHeader from "src/Components/CustomerPageHeader/pageheader";

// Props and States
interface IMenuProps {
  // From redux
  categories: string[];
  currentOrder: IRequestItem[];
  entireMenu: IMenuCategoryWithFlux[];
  getEntireMenu: () => void;
  addToCurrentOrder: (
    itemID: number,
    itemName: string,
    currentPrice: number
  ) => void;
  // From Parent
  menuReady: boolean;
}

interface IMenuState {
  searchBoxEntry: string;
  displayCategoryIndex: number;
  isItemDetailsOpen: { [key: string]: boolean };
}

// Redux
const mapStateToProps = (state: IRootState) => {
  return {
    // priceMapping: state.orders.priceMapping,
    entireMenu: state.customer.orders.entireMenu,
    categories: state.customer.orders.categories,
    currentOrder: state.customer.orders.currentOrder
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getEntireMenu: () => {
      dispatch(getEntireMenu());
    },
    addToCurrentOrder: (itemid: number, name: string, currentPrice: number) => {
      dispatch(addToCurrentOrder(itemid, name, currentPrice));
      AppToaster.show({
        message: "Item added to order!",
        intent: Intent.SUCCESS,
        icon: "tick",
        timeout: 2000
      });
    }
  };
};

// Component class
export class PureMenu extends React.Component<IMenuProps, IMenuState> {
  constructor(props: IMenuProps) {
    super(props);

    const tempisItemDetailsOpen = {};
    this.props.entireMenu.forEach((category: any, categoryIndex: any) => {
      category.items.forEach((item: any, itemIndex: any) => {
        const currentLoc = category.categoryName
          .toString()
          .concat(itemIndex.toString());
        tempisItemDetailsOpen[`${currentLoc}`] = false;
      });
    });

    this.state = {
      searchBoxEntry: "",
      displayCategoryIndex: 0,
      isItemDetailsOpen: tempisItemDetailsOpen
    };
  }

  // price fluc. by socket.io, new price recieved in actions_orders
  // map state.entireMenu to props and comp will re-render when updated
  // F5 btn for testing
  public refreshPrice = () => {
    store.dispatch({ type: "POST/buy", data: {} });
  };

  // switch category
  public previousCategory = () => {
    if (this.state.displayCategoryIndex - 1 < 0) {
      this.setState({ displayCategoryIndex: this.props.categories.length - 1 });
    } else {
      this.setState({
        displayCategoryIndex: this.state.displayCategoryIndex - 1
      });
    }
  };

  public nextCategory = () => {
    if (this.state.displayCategoryIndex + 1 >= this.props.categories.length) {
      this.setState({ displayCategoryIndex: 0 });
    } else {
      this.setState({
        displayCategoryIndex: this.state.displayCategoryIndex + 1
      });
    }
  };

  // toggle description box
  public isOpen = (locKey: string) => {
    const newMenuState = { ...this.state.isItemDetailsOpen };
    newMenuState[locKey] = !newMenuState[locKey];

    this.setState({
      isItemDetailsOpen: newMenuState
    });
  };

  // search box
  public searching = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchBoxEntry: e.target.value.toLowerCase() });
  };

  public componentWillMount() {
    if (!this.props.menuReady) {
      this.props.getEntireMenu();
    }
  }

  public onCategoryChange = (index: number) => {
    this.setState({
      displayCategoryIndex: index
    });
  };

  // TODO: to fix the next and Previous of the carousel
  public render() {
    // https://react-slick.neostack.com/docs/api
    const sliderOneSettings = {
      dots: false,
      // dotsClass: "filterDots",
      arrows: false,
      infinite: true,
      speed: 1000,
      // initialSlide: 0,
      slidesToShow: 1,
      slidesToScroll: 1,
      // adaptiveHeight: true,
      draggable: true,
      swipeToSlide: true,
      focusOnSelect: true,
      afterChange: (index: number) => {
        // alert(index);
        this.onCategoryChange(index);
      }
    };

    return (
      <div className="page-content-container">
        <PageHeader header={"Menu"} subHeader={"Explore the art of stock-picking"} />

        <Slider {...sliderOneSettings} className="menu-display">
          {this.props.categories.map((cat: string) => {
            return (
              <div key={`cat_${cat}`}>
                <img
                  src={require(`./img/categories/${cat}.jpg`)}
                  alt=""
                  className="rd-corner display-img"
                />
              </div>
            );
          })}
        </Slider>
        <input
          className="searchbar rd-corner"
          type="text"
          placeholder="Search input"
          dir="auto"
          value={this.state.searchBoxEntry}
          onChange={this.searching}
        />

        {/* render display from all > cat > search */}
        {this.props.entireMenu.map(
          (category: IMenuCategoryWithFlux, categoryIndex: number) =>
            category.items.map(
              (item: IMenuItemWithFlux, itemIndex: number) =>
                /* v match searching, check for invalid char */
                item.itemName
                  .toLowerCase()
                  .search(
                    this.state.searchBoxEntry.replace(
                      /([.?*+^$[\]\\(){}|-])/g,
                      "\\$1"
                    )
                  ) !== -1 &&
                /* v match selected category */
                category.categoryName ===
                this.props.categories[this.state.displayCategoryIndex] &&
                /* v check stock > 0 */
                item.itemStock > 0 && (
                  <MenuItem
                    {...item}
                    addToCurrentOrder={this.props.addToCurrentOrder}
                  />
                )
            )
        )}
        <UserMenu />
      </div>
    );
  }
}

const Menu = connect(
  mapStateToProps,
  mapDispatchToProps
)(PureMenu);

export default Menu;
