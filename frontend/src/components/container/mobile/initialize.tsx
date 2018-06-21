// Importing modules from library
import * as React from "react";

// redux
import { connect } from "react-redux";
import { IRootState } from "../../../redux/store";
import { getEntireMenu, getOrdersByUserToken } from "../../../redux/mobile/actions/actions_orders";
import { getUserProfileByUserToken } from "../../../redux/mobile/actions/actions_user";

// for redir
import * as History from "history";

interface IInitializeProps {
    // handling redirect
    history: History.History,
    // init
    isAuth: boolean,

    getEntireMenu: () => void,
    menuReady: boolean,

    userProfile: any,
    getUserProfileByUserToken: () => void,
    userProfileReady: boolean,

    getOrdersByUserToken: () => void,
    orderListReady: boolean,
}

// interface IInitializeState {

// }

class PureInitialize extends React.Component<IInitializeProps, {}> {
    constructor(props: IInitializeProps) {
        super(props)
    }

    public componentDidMount() {
        // fetch entireMenu , set categories[]
        this.props.getEntireMenu();
        // fetch user data
        // this.props.getUserProfileByUserid(this.props.user_id);
        this.props.getUserProfileByUserToken();
        // fetch ordersList (or not?)
        // this.props.getOrdersByUserid(this.props.user_id);
        this.props.getOrdersByUserToken();
    }

    public componentDidUpdate() {
        if (this.props.menuReady) {
            this.props.history.push("/menu");
        }
    }

    public render() {
        return (
            <div className="order-header-container">
                <h3 className="order-header">Your order history is empty, get a drink</h3>
            </div>
        )
    }
}

const mapStateToProps = (state: IRootState) => {
    return {
        isAuth: state.customer.user.isAuth,
        menuReady: state.customer.orders.menuReady,
        userProfileReady: state.customer.user.userProfileReady,
        orderListReady: state.customer.orders.orderListReady,
        userProfile: state.customer.user.userProfile,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getEntireMenu: () => {
            dispatch(getEntireMenu());
        },
        getUserProfileByUserToken: () => {
            dispatch(getUserProfileByUserToken());
        },
        getOrdersByUserToken: () => {
            dispatch(getOrdersByUserToken());
        },
    }
}

const Initialize = connect(mapStateToProps, mapDispatchToProps)(PureInitialize);

export default Initialize;
