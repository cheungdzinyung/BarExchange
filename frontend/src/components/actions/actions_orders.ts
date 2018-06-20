import { Action, Dispatch } from "redux";
import axios from "axios";

import {
    ICurrentOrder,
} from "../../modules";

/* ===== ===== ===== ===== ===== ===== ===== ===== ===== */
export const GET_ENTIRE_MENU_SUCCESS = "GET_ENTIRE_MENU_SUCCESS";
export type GET_ENTIRE_MENU_SUCCESS = typeof GET_ENTIRE_MENU_SUCCESS;
export interface IGetEntireMenuSuccessAction extends Action {
    type: GET_ENTIRE_MENU_SUCCESS,
    entireMenu: any,
}

export const GET_ENTIRE_MENU_FAIL = "GET_ENTIRE_MENU_FAIL";
export type GET_ENTIRE_MENU_FAIL = typeof GET_ENTIRE_MENU_FAIL;
export interface IGetEntireMenuFailAction extends Action {
    type: GET_ENTIRE_MENU_FAIL,
}
/* ===== ===== ===== ===== ===== ===== ===== ===== ===== */
export const ADD_ITEM = "ADD_ITEM";
export type ADD_ITEM = typeof ADD_ITEM;
export interface IAddItemAction extends Action {
    type: ADD_ITEM,
    itemid: number,
    itemName: string,
    currentPrice: number,
}

export const REMOVE_ITEM = "REMOVE_ITEM";
export type REMOVE_ITEM = typeof REMOVE_ITEM;
export interface IRemoveItemAction extends Action {
    type: REMOVE_ITEM,
    thisItemID: number,
}
/* ===== ===== ===== ===== ===== ===== ===== ===== ===== */
export const CONFIRM_ORDER_SUCCESS = "CONFIRM_ORDER_SUCCESS";
export type CONFIRM_ORDER_SUCCESS = typeof CONFIRM_ORDER_SUCCESS;
export interface IConfirmOrderSuccessAction extends Action {
    type: CONFIRM_ORDER_SUCCESS,
    result: any,
    orderToConfirm: ICurrentOrder,
}

export const CONFIRM_ORDER_FAIL = "CONFIRM_ORDER_FAIL";
export type CONFIRM_ORDER_FAIL = typeof CONFIRM_ORDER_FAIL;
export interface IConfirmOrderFailAction extends Action {
    type: CONFIRM_ORDER_FAIL,
    result: any,
}
/* ===== ===== ===== ===== ===== ===== ===== ===== ===== */
export const GET_ORDERS_BY_USERID_SUCCESS = "GET_ORDERS_BY_USERID_SUCCESS";
export type GET_ORDERS_BY_USERID_SUCCESS = typeof GET_ORDERS_BY_USERID_SUCCESS;
export interface IGetOrdersByUseridSuccessAction extends Action {
    type: GET_ORDERS_BY_USERID_SUCCESS,
    allOrdersByOneUser: any,
}

export const GET_ORDERS_BY_USERID_FAIL = "GET_ORDERS_BY_USERID_FAIL";
export type GET_ORDERS_BY_USERID_FAIL = typeof GET_ORDERS_BY_USERID_FAIL;
export interface IGetOrdersByUseridFailAction extends Action {
    type: GET_ORDERS_BY_USERID_FAIL,
}
/* ===== ===== ===== ===== ===== ===== ===== ===== ===== */
export const SOCKET_CONNECT_SUCCESS = "SOCKET_CONNECT_SUCCESS";
export type SOCKET_CONNECT_SUCCESS = typeof SOCKET_CONNECT_SUCCESS;
export interface ISocketConnectSuccess extends Action {
    type: SOCKET_CONNECT_SUCCESS,
    socketID:any,
}

export const SOCKET_UPDATE_ITEM_PRICE = "SOCKET_UPDATE_ITEM_PRICE";
export type SOCKET_UPDATE_ITEM_PRICE = typeof SOCKET_UPDATE_ITEM_PRICE;
export interface ISocketUpdateItemPrice extends Action {
    type: SOCKET_UPDATE_ITEM_PRICE,
    entireMenu:any,
}


/* ===== ===== ===== ===== ===== ===== ===== ===== ===== */
export type OrdersActions =
    IGetEntireMenuSuccessAction |
    IGetEntireMenuFailAction |
    IAddItemAction |
    IRemoveItemAction |
    IConfirmOrderSuccessAction |
    IConfirmOrderFailAction |
    IGetOrdersByUseridSuccessAction |
    IGetOrdersByUseridFailAction |
    ISocketConnectSuccess |
    ISocketUpdateItemPrice;

/* ===== ===== ===== ===== ===== ===== ===== ===== ===== */
export function getEntireMenuSuccess(entireMenu: any): IGetEntireMenuSuccessAction {
    return {
        type: GET_ENTIRE_MENU_SUCCESS,
        entireMenu,
    }
}

export function getEntireMenuFail(): IGetEntireMenuFailAction {
    return {
        type: GET_ENTIRE_MENU_FAIL,
    }
}

export function getEntireMenu() {
    return (dispatch: Dispatch<IGetEntireMenuSuccessAction | IGetEntireMenuFailAction>) => {
        axios.get("http://localhost:8080/api/items")
            .then((res: any) => {
                if (res.status === 200) {
                    // alert(Object.keys(res.data));
                    dispatch(getEntireMenuSuccess(res.data));
                } else {
                    alert("error not 200");
                    dispatch(getEntireMenuFail());
                }
            })
            .catch((err:any) => {
                alert(err);
                dispatch(getEntireMenuFail());
            });
    }
}
/* ===== ===== ===== ===== ===== ===== ===== ===== ===== */
export function addToCurrentOrder(itemid: number, itemName: string, currentPrice: number): IAddItemAction {
    return {
        type: ADD_ITEM,
        itemid,
        itemName,
        currentPrice,
    }
}

export function removeFromCurrentOrder(thisItemID: number): IRemoveItemAction {
    return {
        type: REMOVE_ITEM,
        thisItemID,
    }
}
/* ===== ===== ===== ===== ===== ===== ===== ===== ===== */
export function confirmOrderSuccess(result: any, orderToConfirm: ICurrentOrder): IConfirmOrderSuccessAction {
    return {
        type: CONFIRM_ORDER_SUCCESS,
        result,
        orderToConfirm,
    }
}

export function confirmOrderFail(result: any): IConfirmOrderFailAction {
    return {
        type: CONFIRM_ORDER_FAIL,
        result,
    }
}

export function confirmOrder(orderToConfirm: ICurrentOrder) {
    const config = { headers: {Authorization: "Bearer " + localStorage.getItem("dealingRoomToken")} }
    return (dispatch: Dispatch<IConfirmOrderSuccessAction | IConfirmOrderFailAction>) => {
        axios.post(`http://localhost:8080/api/orders/${orderToConfirm.users_id}`, orderToConfirm, config)
            .then((res: any) => {
                if (res.status === 201) {
                    alert(res.data.status + " now redirect to order list");
                    alert(JSON.stringify(res.data))
                    dispatch(confirmOrderSuccess(res.data, orderToConfirm));
                } else {
                    alert("error, try again");
                    dispatch(confirmOrderFail(res.data));
                }
            })
            .catch((err: any) => {
                alert(err);
                dispatch(confirmOrderFail(err))
            });
    }
}
/* ===== ===== ===== ===== ===== ===== ===== ===== ===== */
export function getOrdersByUseridSuccess(allOrdersByOneUser: any): IGetOrdersByUseridSuccessAction {
    return {
        type: GET_ORDERS_BY_USERID_SUCCESS,
        allOrdersByOneUser,
    }
}

export function getOrdersByUseridFail(): IGetOrdersByUseridFailAction {
    return {
        type: GET_ORDERS_BY_USERID_FAIL,
    }
}

export function getOrdersByUserid(userID: number) {
    const config = { headers: {Authorization: "Bearer " + localStorage.getItem("dealingRoomToken")} }
    return (dispatch: Dispatch<IGetOrdersByUseridSuccessAction | IGetOrdersByUseridFailAction>) => {
        axios.get(`http://localhost:8080/api/orders/user/${userID}`, config)
            .then((res: any) => {
                if (res.status === 200) {
                    dispatch(getOrdersByUseridSuccess(res.data[0]));
                    // auto redir to order list page
                    // dispatch(changePage(OrderList));
                } else {
                    alert("status: " + res.status);
                    dispatch(getOrdersByUseridFail());
                }
            })
            .catch((err: any) => {
                alert(err);
                dispatch(getOrdersByUseridFail())
            });
    }
}
/* ===== ===== ===== ===== ===== ===== ===== ===== ===== */
export function socketConnect(socketID: any): ISocketConnectSuccess {
    return {
        type: SOCKET_CONNECT_SUCCESS,
        socketID,
    }
}

export function socketUpdateItemPrice(entireMenu: any): ISocketUpdateItemPrice {
    return {
        type: SOCKET_UPDATE_ITEM_PRICE,
        entireMenu,
    }
}