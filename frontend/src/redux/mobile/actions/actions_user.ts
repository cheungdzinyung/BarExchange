import { Action, Dispatch } from "redux";
import axios from "axios";

import { API_SERVER } from "src/redux/store";
import {
  ISignUpPackage,
  ILoginPackage,
  IConsumpGraphDataDeceiveAll
} from "src/modules";

// Import UI elements
import { AppToaster } from "src/Components/ToastAlert/toast";
import { Intent } from "@blueprintjs/core";

/* ===== ===== ===== ===== ===== ===== ===== ===== ===== */
export const CHANGE_PAGE = "CHANGE_PAGE";
export type CHANGE_PAGE = typeof CHANGE_PAGE;
export interface IChangePageAction extends Action {
  type: CHANGE_PAGE;
  currentPage: string;
}

export const REDIRECT_PAGE = "REDIRECT_PAGE";
export type REDIRECT_PAGE = typeof REDIRECT_PAGE;
export interface IRedirectPageAction extends Action {
  type: REDIRECT_PAGE;
  redirectTarget: string;
  history: any;
}

export const RESET_TARGET_PAGE = "RESET_TARGET_PAGE";
export type RESET_TARGET_PAGE = typeof RESET_TARGET_PAGE;
export interface IRestTargetPageAction extends Action {
  type: RESET_TARGET_PAGE;
}

/* ===== ===== ===== ===== ===== ===== ===== ===== ===== */
export const LOCAL_LOGIN_SUCCESS = "LOCAL_LOGIN_SUCCESS";
export type LOCAL_LOGIN_SUCCESS = typeof LOCAL_LOGIN_SUCCESS;
export interface ILocalLoginSuccessAction extends Action {
  type: LOCAL_LOGIN_SUCCESS;
  userInfoPackage: any;
}

export const LOCAL_LOGIN_FAIL = "LOCAL_LOGIN_FAIL";
export type LOCAL_LOGIN_FAIL = typeof LOCAL_LOGIN_FAIL;
export interface ILocalLoginFailAction extends Action {
  type: LOCAL_LOGIN_FAIL;
  errMsg: string;
}

/* ===== ===== ===== ===== ===== ===== ===== ===== ===== */
export const LOCAL_SIGNUP_SUCCESS = "LOCAL_SIGNUP_SUCCESS";
export type LOCAL_SIGNUP_SUCCESS = typeof LOCAL_SIGNUP_SUCCESS;
export interface ILocalSignUpSuccessAction extends Action {
  type: LOCAL_SIGNUP_SUCCESS;
  userInfoPackage: any;
}

export const LOCAL_SIGNUP_FAIL = "LOCAL_SIGNUP_FAIL";
export type LOCAL_SIGNUP_FAIL = typeof LOCAL_SIGNUP_FAIL;
export interface ILocalSignUpFailAction extends Action {
  type: LOCAL_SIGNUP_FAIL;
  errMsg: any;
}

/* ===== ===== ===== ===== ===== ===== ===== ===== ===== */
export const FB_LOGIN_SUCCESS = "FB_LOGIN_SUCCESS";
export type FB_LOGIN_SUCCESS = typeof FB_LOGIN_SUCCESS;
export interface IFBLoginSuccessAction extends Action {
  type: FB_LOGIN_SUCCESS;
  FBtoken: string;
}

export const FB_LOGIN_FAIL = "FB_LOGIN_FAIL";
export type FB_LOGIN_FAIL = typeof FB_LOGIN_FAIL;
export interface IFBLoginFailAction extends Action {
  type: FB_LOGIN_FAIL;
  errMsg: string;
}

/* ===== ===== ===== ===== ===== ===== ===== ===== ===== */
export const GET_USER_PROFILE_BY_USER_TOKEN_SUCCESS =
  "GET_USER_PROFILE_BY_USER_TOKEN_SUCCESS";
export type GET_USER_PROFILE_BY_USER_TOKEN_SUCCESS = typeof GET_USER_PROFILE_BY_USER_TOKEN_SUCCESS;
export interface IGetUserProfileByUserTokenSuccessAction extends Action {
  type: GET_USER_PROFILE_BY_USER_TOKEN_SUCCESS;
  userProfile: any;
}

export const GET_USER_PROFILE_BY_USER_TOKEN_FAIL =
  "GET_USER_PROFILE_BY_USER_TOKEN_FAIL";
export type GET_USER_PROFILE_BY_USER_TOKEN_FAIL = typeof GET_USER_PROFILE_BY_USER_TOKEN_FAIL;
export interface IGetUserProfileByUserTokenFailAction extends Action {
  type: GET_USER_PROFILE_BY_USER_TOKEN_FAIL;
  errMsg: string;
}

// /* ===== ===== ===== ===== ===== ===== ===== ===== ===== */
export const GET_USER_CONSUMPTIONS_BY_USER_TOKEN_SUCCESS =
  "GET_USER_CONSUMPTIONS_BY_USER_TOKEN_SUCCESS";
export type GET_USER_CONSUMPTIONS_BY_USER_TOKEN_SUCCESS = typeof GET_USER_CONSUMPTIONS_BY_USER_TOKEN_SUCCESS;
export interface IGetUserConsumptionsByUserTokenSuccess extends Action {
  type: GET_USER_CONSUMPTIONS_BY_USER_TOKEN_SUCCESS;
  userConsumptionComparison: IConsumpGraphDataDeceiveAll;
}

export const GET_USER_CONSUMPTIONS_BY_USER_TOKEN_FAIL =
  "GET_USER_CONSUMPTIONS_BY_USER_TOKEN_FAIL";
export type GET_USER_CONSUMPTIONS_BY_USER_TOKEN_FAIL = typeof GET_USER_CONSUMPTIONS_BY_USER_TOKEN_FAIL;
export interface IGetUserConsumptionsByUserTokenFail extends Action {
  type: GET_USER_CONSUMPTIONS_BY_USER_TOKEN_FAIL;
  errMsg: string;
}

// /* ===== ===== ===== ===== ===== ===== ===== ===== ===== */

export type UserActions =
  | IChangePageAction
  | IRedirectPageAction
  | IRestTargetPageAction
  | ILocalLoginSuccessAction
  | ILocalLoginFailAction
  | ILocalSignUpSuccessAction
  | ILocalSignUpFailAction
  | IFBLoginSuccessAction
  | IFBLoginFailAction
  | IGetUserProfileByUserTokenSuccessAction
  | IGetUserProfileByUserTokenFailAction
  | IGetUserConsumptionsByUserTokenSuccess
  | IGetUserConsumptionsByUserTokenFail;

/* ===== ===== ===== ===== ===== ===== ===== ===== ===== */
export function changePage(currentPage: string): IChangePageAction {
  return {
    type: CHANGE_PAGE,
    currentPage
  };
}

export function redirectPage(
  redirectTarget: string,
  history: any
): IRedirectPageAction {
  return {
    type: REDIRECT_PAGE,
    redirectTarget,
    history
  };
}

export function resetTargetPage(): IRestTargetPageAction {
  return {
    type: RESET_TARGET_PAGE
  };
}

/* ===== ===== ===== ===== ===== ===== ===== ===== ===== */
export function localLoginSuccess(
  userInfoPackage: any
): ILocalLoginSuccessAction {
  return {
    type: LOCAL_LOGIN_SUCCESS,
    userInfoPackage
  };
}

export function localLoginFail(errMsg: string): ILocalLoginFailAction {
  return {
    type: LOCAL_LOGIN_FAIL,
    errMsg
  };
}

export function localLogin(username: string, password: string) {
  return (
    dispatch: Dispatch<ILocalLoginSuccessAction | ILocalLoginFailAction>
  ) => {
    const loginPackage: ILoginPackage = {
      username,
      password
    };

    axios
      .post(`${API_SERVER}/api/auth/login`, loginPackage)
      .then((res: any) => {
        if (res.status === 200) {
          dispatch(localLoginSuccess(res.data));
        } else {
          dispatch(localLoginFail(res.status));
          throw new Error("Login failed, please try again.");
        }
      })
      .catch((err: any) => {
        // alert(err.response.data || err);
        dispatch(localLoginFail(err.response.data || err));
        AppToaster.show({
          message: "Error, try again\n" + err.response.data || err,
          intent: Intent.WARNING,
          icon: "cross",
          timeout: 2000
        });
      });
  };
}

/* ===== ===== ===== ===== ===== ===== ===== ===== ===== */
export function localSignUpSuccess(
  userInfoPackage: any
): ILocalSignUpSuccessAction {
  return {
    type: LOCAL_SIGNUP_SUCCESS,
    userInfoPackage
  };
}

export function localSignUpFail(errMsg: any): ILocalSignUpFailAction {
  return {
    type: LOCAL_SIGNUP_FAIL,
    errMsg
  };
}

// manual login after sign up
// export function localSignUp(username: string, password: string) {
//     return (dispatch: Dispatch<ILocalSignUpSuccessAction | ILocalSignUpFailAction>) => {
//         const signUpPackage: ISignUpPackage = {
//             username,
//             password,
//             role: "customer",
//             displayName: username,
//         };

//         axios.post(`${API_SERVER}/api/auth/signup`, signUpPackage)
//             .then((res: any) => {
//                 if (res.status === 201) {
//                     dispatch(localSignUpSuccess(res.data[0]));
//                 } else {
//                     alert("status: " + res.status);
//                     dispatch(localSignUpFail(res.status));
//                 }
//             })
//             .catch((err: any) => {
//                 alert(err);
//                 dispatch(localSignUpFail(err));
//             });
//     }
// }

// auto login after sign up
export function localSignUp(username: string, password: string) {
  return (
    dispatch: Dispatch<
      | ILocalSignUpSuccessAction
      | ILocalSignUpFailAction
      | ILocalLoginSuccessAction
      | ILocalLoginFailAction
    >
  ) => {
    const signUpPackage: ISignUpPackage = {
      username,
      password,
      role: "customer",
      displayName: username
    };

    // const loginPackage = {
    //   username,
    //   password
    // };

    axios
      .post(`${API_SERVER}/api/auth/signup`, signUpPackage)
      .then((res: any) => {
        if (res.status === 200) {
          dispatch(localSignUpSuccess(res.data));
          // axios
          //   .post(`${API_SERVER}/api/auth/login`, loginPackage)
          //   .then((resp: any) => {
          //     if (resp.status === 200) {
          //       dispatch(localLoginSuccess(resp.data));
          //     } else {
          //       // alert("status: " + resp.status);
          //       dispatch(localLoginFail(resp.status));
          //       AppToaster.show({
          //         message: "Login failed, try again\n",
          //         intent: Intent.WARNING,
          //         icon: "cross",
          //         timeout: 2000
          //       });
          //     }
          //   })
          //   .catch((err: any) => {
          //     // alert("login fail" + err);
          //     dispatch(localLoginFail(err));
          //     AppToaster.show({
          //       message: "Login failed, try again\n",
          //       intent: Intent.WARNING,
          //       icon: "cross",
          //       timeout: 2000
          //     });
          //   });
        } else {
          // alert("sign up fail: " + res.status);
          dispatch(localSignUpFail(res.status));
          AppToaster.show({
            message: "Login failed, try again\n",
            intent: Intent.WARNING,
            icon: "cross",
            timeout: 2000
          });
        }
      })
      .catch((err: any) => {
        // alert(err.response.data || err);
        dispatch(localSignUpFail(err.response.data || err));
        AppToaster.show({
          message: "Error, try again\n" + err.response.data || err,
          intent: Intent.WARNING,
          icon: "cross",
          timeout: 2000
        });
      });
  };
}

/* ===== ===== ===== ===== ===== ===== ===== ===== ===== */
export function loginFacebookSucccess(FBtoken: string): IFBLoginSuccessAction {
  return {
    type: FB_LOGIN_SUCCESS,
    FBtoken
  };
}

export function loginFacebookFail(errMsg: string): IFBLoginFailAction {
  return {
    type: FB_LOGIN_FAIL,
    errMsg
  };
}

// get FB token is done by plugin
// if success, send token to BE and store in DB
export function loginFacebook(accessToken: string) {
  return (dispatch: Dispatch<IFBLoginSuccessAction | IFBLoginFailAction>) => {
    return axios
      .post<{ accessToken: string; message?: string }>(
        `${API_SERVER}/api/auth/facebook`,
        { accessToken }
      )
      .then((res: any) => {
        if (res.data == null) {
          dispatch(loginFacebookFail("unknown error"));
        } else if (!res.data.token) {
          dispatch(loginFacebookFail("token not found"));
        } else {
          // res.data.token is the jwt-token processed by BE
          dispatch(loginFacebookSucccess(res.data.token));
        }
      })
      .catch((err: any) => {
        dispatch(loginFacebookFail(err));
      });
  };
}

/* ===== ===== ===== ===== ===== ===== ===== ===== ===== */
export function getUserProfileByUserTokenSuccess(
  userProfile: any
): IGetUserProfileByUserTokenSuccessAction {
  return {
    type: GET_USER_PROFILE_BY_USER_TOKEN_SUCCESS,
    userProfile
  };
}

export function getUserProfileByUserTokenFail(
  errMsg: string
): IGetUserProfileByUserTokenFailAction {
  return {
    type: GET_USER_PROFILE_BY_USER_TOKEN_FAIL,
    errMsg
  };
}

export function getUserProfileByUserToken() {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dealingRoomToken")
    }
  };
  return (
    dispatch: Dispatch<
      | IGetUserProfileByUserTokenSuccessAction
      | IGetUserProfileByUserTokenFailAction
    >
  ) => {
    axios
      .get(`${API_SERVER}/api/users`, config)
      .then((res: any) => {
        if (res.status === 200) {
          dispatch(getUserProfileByUserTokenSuccess(res.data[0]));
          // auto redir to order list page ===> moved to init page
          // dispatch(changePage(OrderList));
        } else {
          alert("status: " + res.status);
          dispatch(getUserProfileByUserTokenFail(""));
        }
      })
      .catch((err: any) => {
        alert(err);
        dispatch(getUserProfileByUserTokenFail(""));
      });
  };
}

// /* ===== ===== ===== ===== ===== ===== ===== ===== ===== */
export function getUserConsumptionByUserTokenSuccess(
  userConsumptionComparison: IConsumpGraphDataDeceiveAll
): IGetUserConsumptionsByUserTokenSuccess {
  return {
    type: GET_USER_CONSUMPTIONS_BY_USER_TOKEN_SUCCESS,
    userConsumptionComparison
  };
}

export function getUserConsumptionByUserTokenFail(
  errMsg: string
): IGetUserConsumptionsByUserTokenFail {
  return {
    type: GET_USER_CONSUMPTIONS_BY_USER_TOKEN_FAIL,
    errMsg
  };
}

export function getUserConsumptionByUserToken() {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dealingRoomToken")
    }
  };
  return (
    dispatch: Dispatch<
      | IGetUserConsumptionsByUserTokenSuccess
      | IGetUserConsumptionsByUserTokenFail
    >
  ) => {
    const year = (new Date(Date.now())).getFullYear();
    const month = (new Date(Date.now())).getMonth() + 1;
    const date = (new Date(Date.now())).getDate();
    axios
      .get(`${API_SERVER}/api/orders/prices/?dateOfQuery=${year}-${month}-${date}`, config)
      .then((res: any) => {
        if (res.status === 200) {
          dispatch(getUserConsumptionByUserTokenSuccess(res.data));
        } else {
          alert("status: " + res.status);
          dispatch(getUserConsumptionByUserTokenFail(""));
        }
      })
      .catch((err: any) => {
        alert(err);
        dispatch(getUserConsumptionByUserTokenFail(""));
      });
  };
}
