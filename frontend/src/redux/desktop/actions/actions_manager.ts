// Importing modules
import { Action, Dispatch } from "redux";
import axios from "axios";

import { API_SERVER } from "../../store";

// Import UI elements
import { AppToaster } from "src/Components/ToastAlert/toast";
import { Intent } from "@blueprintjs/core";

import { 
	IMenuCategoryWithoutFlux,
	ICreateMenuItem,
	IUpdateMenuItem,
	IStockManageModalState,
	ISpecialEvent,
} from "src/modules";

// Type creation
export const CREATE_ITEM_SUCCESS = "CREATE_ITEM_SUCCESS";
export type CREATE_ITEM_SUCCESS = typeof CREATE_ITEM_SUCCESS;
export interface ICreateItemSuccessAction extends Action {
	type: CREATE_ITEM_SUCCESS,
	entireMenu: IMenuCategoryWithoutFlux[],
}

export const CREATE_ITEM_FAIL = "CREATE_ITEM_FAIL";
export type CREATE_ITEM_FAIL = typeof CREATE_ITEM_FAIL;
export interface ICreateItemFailAction extends Action {
	type: CREATE_ITEM_FAIL,
	// result: any,
}

/* ===== ===== ===== ===== ===== ===== ===== ===== ===== */
// Change item status
export const UPDATE_ITEM_SUCCESS = "UPDATE_ITEM_SUCCESS";
export type UPDATE_ITEM_SUCCESS = typeof UPDATE_ITEM_SUCCESS;
export interface IUpdateItemSuccessAction extends Action {
	type: UPDATE_ITEM_SUCCESS,
	entireMenu: IMenuCategoryWithoutFlux[],
}

export const UPDATE_ITEM_FAIL = "UPDATE_ITEM_FAIL";
export type UPDATE_ITEM_FAIL = typeof UPDATE_ITEM_FAIL;
export interface IUpdateItemFailAction extends Action {
	type: UPDATE_ITEM_FAIL,
	// result: any,
}

/* ===== ===== ===== ===== ===== ===== ===== ===== ===== */
export const GET_ENTIRE_MENU_SUCCESS = "GET_ENTIRE_MENU_SUCCESS";
export type GET_ENTIRE_MENU_SUCCESS = typeof GET_ENTIRE_MENU_SUCCESS;
export interface IGetEntireMenuSuccessAction extends Action {
	type: GET_ENTIRE_MENU_SUCCESS,
	entireMenu: IMenuCategoryWithoutFlux[],
}

export const GET_ENTIRE_MENU_FAIL = "GET_ENTIRE_MENU_FAIL";
export type GET_ENTIRE_MENU_FAIL = typeof GET_ENTIRE_MENU_FAIL;
export interface IGetEntireMenuFailAction extends Action {
	type: GET_ENTIRE_MENU_FAIL,
}

/* ===== ===== ===== ===== ===== ===== ===== ===== ===== */
export const TOGGLE_STOCK_MANAGE_MODAL = "TOGGLE_STOCK_MANAGE_MODAL";
export type TOGGLE_STOCK_MANAGE_MODAL = typeof TOGGLE_STOCK_MANAGE_MODAL;
export interface IToggleStockManageModalAction extends Action {
	type: TOGGLE_STOCK_MANAGE_MODAL,
	stockManageModalState: IStockManageModalState,
	targetItem?: IUpdateMenuItem,
}

/* ===== ===== ===== ===== ===== ===== ===== ===== ===== */
export const RESET_SUCCESS_STATUS = "RESET_SUCCESS_STATUS";
export type RESET_SUCCESS_STATUS = typeof RESET_SUCCESS_STATUS;
export interface IResetSuccessStatusAction extends Action {
	type: RESET_SUCCESS_STATUS,
}

/* ===== ===== ===== ===== ===== ===== ===== ===== ===== */
export const TRIGGER_SP_EVENT_SUCCESS = "TRIGGER_SP_EVENT_SUCCESS";
export type TRIGGER_SP_EVENT_SUCCESS = typeof TRIGGER_SP_EVENT_SUCCESS;
export interface ITriggerSpEventSuccessAction extends Action {
	type: TRIGGER_SP_EVENT_SUCCESS,
}

/* ===== ===== ===== ===== ===== ===== ===== ===== ===== */
export const TRIGGER_SP_EVENT_FAIL = "TRIGGER_SP_EVENT_FAIL";
export type TRIGGER_SP_EVENT_FAIL = typeof TRIGGER_SP_EVENT_FAIL;
export interface ITriggerSpEventFailAction extends Action {
	type: TRIGGER_SP_EVENT_FAIL,
	errMsg: any,
}

/* ===== ===== ===== ===== ===== ===== ===== ===== ===== */
// Combined types
export type ManagerActions =
	IGetEntireMenuSuccessAction |
	IGetEntireMenuFailAction |
	ICreateItemSuccessAction |
	ICreateItemFailAction |
	IUpdateItemSuccessAction |
	IUpdateItemFailAction |
	IToggleStockManageModalAction |
	IResetSuccessStatusAction |
	ITriggerSpEventSuccessAction |
	ITriggerSpEventFailAction;

/* ===== ===== ===== ===== ===== ===== ===== ===== ===== */
export function getEntireMenuSuccess(entireMenu: IMenuCategoryWithoutFlux[]): IGetEntireMenuSuccessAction {
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
        // axios.get("${process.env.REACT_APP_API_DEV}/api/items")
        axios.get(`${API_SERVER}/api/items`)
            .then((res: any) => {
                if (res.status === 200) {
                    // alert(Object.keys(res.data));
                    dispatch(getEntireMenuSuccess(res.data));
                } else {
                    alert("error not 200");
                    dispatch(getEntireMenuFail());
                }
            })
            .catch((err: any) => {
                alert(err);
                dispatch(getEntireMenuFail());
            });
    }
}
/* ===== ===== ===== ===== ===== ===== ===== ===== ===== */
export function createItemSuccess(entireMenu: IMenuCategoryWithoutFlux[]): ICreateItemSuccessAction {
	return {
		type: CREATE_ITEM_SUCCESS,
		entireMenu,
	}
}

export function createItemFail(): ICreateItemFailAction {
	return {
		type: CREATE_ITEM_FAIL,
		// result,
	}
}

export function createItem(itemStatus: ICreateMenuItem) {
	const config = { headers: { Authorization: "Bearer " + localStorage.getItem("dealingRoomToken") } }
	return (dispatch: Dispatch<ICreateItemSuccessAction | ICreateItemFailAction>) => {
		axios.post(`${API_SERVER}/api/items/`, itemStatus, config)
			.then((res: any) => {
				if (res.status === 201) {
					dispatch(createItemSuccess(res.data));
					AppToaster.show({
                        message: "success",
                        intent: Intent.SUCCESS,
                        icon: "tick",
                        timeout: 2000
                    });
				} else {
					alert("create item error, try again");
					dispatch(createItemFail());
					AppToaster.show({
                        message: "Error, try again",
                        intent: Intent.WARNING,
                        icon: "cross",
                        timeout: 2000
                    });
				}
			})
			.catch((err: any) => {
				dispatch(createItemFail());
				AppToaster.show({
					message: "Error, try again",
					intent: Intent.WARNING,
					icon: "cross",
					timeout: 2000
				});
			})
	}
}

/* ===== ===== ===== ===== ===== ===== ===== ===== ===== */
export function updateItemSuccess(entireMenu: IMenuCategoryWithoutFlux[]): IUpdateItemSuccessAction {
	return {
		type: UPDATE_ITEM_SUCCESS,
		entireMenu,
	}
}

export function updateItemFail(): IUpdateItemFailAction {
	return {
		type: UPDATE_ITEM_FAIL,
		// result,
	}
}

export function updateItem(itemStatus: IUpdateMenuItem) {
	const config = { headers: { Authorization: "Bearer " + localStorage.getItem("dealingRoomToken") } }
	return (dispatch: Dispatch<IUpdateItemSuccessAction | IUpdateItemFailAction>) => {
		// axios.put(`${API_SERVER}/api/items/${itemStatus.items_id}`, itemStatus, config)
		axios.put(`${API_SERVER}/api/items/${itemStatus.items_id}/?includeInActive="true"`, itemStatus, config)
			.then((res: any) => {
				if (res.status === 201) {
					dispatch(updateItemSuccess(res.data));
					AppToaster.show({
                        message: "success",
                        intent: Intent.SUCCESS,
                        icon: "tick",
                        timeout: 2000
                    });
				} else {
					dispatch(updateItemFail());
					AppToaster.show({
                        message: "Error, try again",
                        intent: Intent.WARNING,
                        icon: "cross",
                        timeout: 2000
                    });
				}
			})
			.catch((err: any) => {
				dispatch(updateItemFail());
				AppToaster.show({
					message: "Error, try again",
					intent: Intent.WARNING,
					icon: "cross",
					timeout: 2000
				});
			})
	}
}

/* ===== ===== ===== ===== ===== ===== ===== ===== ===== */
export function toggleStockManageModal(stockManageModalState: IStockManageModalState, targetItem?: IUpdateMenuItem): IToggleStockManageModalAction {
	return {
		type: TOGGLE_STOCK_MANAGE_MODAL,
		stockManageModalState,
		targetItem,
	}
}

/* ===== ===== ===== ===== ===== ===== ===== ===== ===== */
export function resetSuccessState(): IResetSuccessStatusAction {
	return {
		type: RESET_SUCCESS_STATUS,
	}
}

/* ===== ===== ===== ===== ===== ===== ===== ===== ===== */
export function triggerSpEventSuccess(): ITriggerSpEventSuccessAction {
	return {
		type: TRIGGER_SP_EVENT_SUCCESS,
	}
}

export function triggerSpEventFail(errMsg: any): ITriggerSpEventFailAction {
	return {
		type: TRIGGER_SP_EVENT_FAIL,
		errMsg,
	}
}

export function triggerSpEvent(eventInfo: ISpecialEvent) {
	const config = { headers: { Authorization: "Bearer " + localStorage.getItem("dealingRoomToken") } }
	return (dispatch: Dispatch<ITriggerSpEventSuccessAction | ITriggerSpEventFailAction>) => {
		axios.post(`${API_SERVER}/api/items/event/pricedrop`, eventInfo, config)
			.then((res: any) => {
				if (res.status === 200) {
					dispatch(triggerSpEventSuccess());
					AppToaster.show({
                        message: "event triggered",
                        intent: Intent.SUCCESS,
                        icon: "tick",
                        timeout: 2000
                    });
				} else {
					// alert("update error, try again");
					dispatch(triggerSpEventFail(res.status + "status not match"));
					AppToaster.show({
                        message: "Error, try again",
                        intent: Intent.WARNING,
                        icon: "cross",
                        timeout: 2000
                    });
				}
			})
			.catch((err: any) => {
				dispatch(triggerSpEventFail(err));
				AppToaster.show({
					message: "Error, try again",
					intent: Intent.WARNING,
					icon: "cross",
					timeout: 2000
				});
			})
	}
}