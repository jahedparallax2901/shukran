import {
  AUTH_FAILURE,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  BACK_TO_PHONE_INPUT_SCREEN,
  HIDE_AUTH_MODAL,
  SHOW_AUTH_MODAL,
  SIGN_OUT,
  SOCIAL_LOGIN_FAILURE,
  SOCIAL_LOGIN_REQUEST,
  SOCIAL_LOGIN_SUCCESS,
  VERIFY_OTP_FAILURE,
  VERIFY_OTP_REQUEST,
  VERIFY_OTP_SUCCESS,
} from "./actionTypes";
import { userIsLoggedIn, userData } from "../../helpers/authUtils";

const userInfo = userData();

export const initialState = {
  isShownAuthModal: false,
  loggedIn: false,
  isLoading: false,
  showOTP: false,
  authData: null,
  userIsLoggedIn: userIsLoggedIn(),
  userData: userInfo ? userInfo : null,
  errMessage: null,
  // TODO: OTP will be removed when twello will be connected
  otp: null,
  isTriggeredFromCollectVoucher: false,
  callback: () => null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_AUTH_MODAL:
      return {
        ...state,
        isShownAuthModal: true,
        callback: action.payload,
      };
    case HIDE_AUTH_MODAL:
      return {
        ...state,
        isShownAuthModal: false,
      };
    case AUTH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        showOTP: true,
        isLoading: false,
        errMessage: null,
        // TODO: OTP will be removed when twello will be connected
        otp: action.payload,
      };
    case BACK_TO_PHONE_INPUT_SCREEN:
      return {
        ...state,
        showOTP: false,
      };
    case AUTH_FAILURE:
      return {
        ...state,
        showOTP: false,
        isLoading: false,
        errMessage: action.payload,
      };
    case VERIFY_OTP_REQUEST:
      return {
        ...state,
        errMessage: null,
        isLoading: true,
      };
    case VERIFY_OTP_SUCCESS:
      state.callback()
      return {
        ...state,
        isLoading: false,
        userData: action.payload,
        userIsLoggedIn: true,
        errMessage: null,
        callback: null,
      };
    case VERIFY_OTP_FAILURE:
      return {
        ...state,
        isLoading: false,
        errMessage: action.payload,
      };
    case SOCIAL_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case SOCIAL_LOGIN_SUCCESS:
      state.callback();
      return {
        ...state,
        isLoading: false,
        userData: action.payload,
        userIsLoggedIn: true,
        callback: null,
      };
    case SOCIAL_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case SIGN_OUT:
      return {
        ...state,
        isShownAuthModal: false,
        loggedIn: false,
        isLoading: false,
        showOTP: false,
        authData: null,
        userIsLoggedIn: userIsLoggedIn(),
        userData: null,
        errMessage: null,
        otp: null,
        isTriggeredFromCollectVoucher: false,
        callback: () => null,
      };
    default:
      return state;
  }
};

export default reducer;
