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
import axois from "axios";
import { BASE_API_URL } from "../../helpers/env";

export const handleShowAuthModal = (callback = () => null) => {
  return (dispatch) =>
    dispatch({
      type: SHOW_AUTH_MODAL,
      payload: callback,
    });
};

export const handleHideAuthModal = () => {
  return {
    type: HIDE_AUTH_MODAL,
  };
};

export const handleAuthentication = (credential, callback = () => null) => {
  return (dispatch) => {
    dispatch(authRequest());
    console.log("Inside handleAuthentication", credential);
    if (credential.phone.length > 5) {
      axois
        .post(BASE_API_URL + "/sign-in-otp", credential)
        .then((res) => {
          // if (res.data.status === 1) {
          //TODO: OTP will be removed when twello will be connected
          dispatch(authSuccess(res.data.otp));
          callback();
          // } else {
          //   dispatch(authFailure(res.data.message));
          // }
        })
        .catch((err) => {
          dispatch(authFailure(err.message));
        });
    } else {
      alert("Please insert valid phone number");
    }
  };
};

export const handleAuthenticationWithPassword = (
  credential,
  callback = () => null
) => {
  return (dispatch) => {
    dispatch(verifyOtpRequest());
    if (credential.phone.length > 5 && credential.password.length > 5) {
      // credential.phone = credential.country_code+"-"+credential.phone_number;
      axois
        .post(BASE_API_URL + "/sign-in", credential)
        .then((res) => {
          // if (res.data.status === 1 && res.data?.user_login_session !== undefined) {
          let user = { ...res.data.user };
          user.token = res.data.token;
          localStorage.setItem("user", JSON.stringify(user));
          dispatch(verifyOtpSuccess(user));
          callback();
          // } else {
          //   dispatch(verifyOtpFailure(res.data.message))
          // }
        })
        .catch((err) => {
          dispatch(verifyOtpFailure(err.message));
        });
    } else {
      alert("Please insert valid phone number");
    }
  };
};

export const handleForgotResetPassword = (
  credential,
  callback = () => null
) => {
  return (dispatch) => {
    dispatch(verifyOtpRequest());
    if (credential.phone_number.length > 5) {
      credential.login_id =
        credential.country_code + "-" + credential.phone_number;
      axois
        .post(BASE_API_URL + "/forgot-password", credential)
        .then((res) => {
          if (res.data.status === 1) {
            dispatch(authSuccess(res.data.otpValue));
            callback();
          } else {
            dispatch(authFailure(res.data.message));
          }
        })
        .catch((err) => {
          dispatch(authFailure(err.message));
        });
    } else {
      alert("Please insert valid phone number");
    }
  };
};

export const handleAuthenticationExist = (
  credential,
  callback = () => null
) => {
  return (dispatch) => {
    dispatch(authRequest());
    let data = {};
    if (credential.phone.length > 5) {
      data.phone = credential.phone;
      axois
        .post(BASE_API_URL + "/sign-in-otp", data)
        .then((res) => {
          if (res.data.new_user === true) {
            callback(1);
          } else {
            callback(2);
          }
        })
        .catch((err) => {
          dispatch(authFailure(err.message));
        });
    } else {
      alert("Please insert valid phone number");
    }
  };
};

const authRequest = () => {
  return {
    type: AUTH_REQUEST,
  };
};

export const backToPhoneInputScreen = () => {
  return {
    type: BACK_TO_PHONE_INPUT_SCREEN,
  };
};

const authSuccess = (otp) => {
  return {
    type: AUTH_SUCCESS,
    // TODO: OTP will be removed when twello will be connected
    payload: otp,
  };
};

const authFailure = (msg) => {
  return {
    type: AUTH_FAILURE,
    payload: msg,
  };
};

export const handleVerifyOtp = (otpData, callback) => {
  return (dispatch) => {
    dispatch(verifyOtpRequest());
    if (otpData.otp?.length === 4 && otpData.password?.length > 4) {
      axois
        .post(BASE_API_URL + "/sign-up", otpData)
        .then((res) => {
          // if (res.data.status === 1 && res.data?.user_login_session !== undefined) {
          let user = { ...res.data.user };
          user.token = res.data.token;
          localStorage.setItem("user", JSON.stringify(user));
          dispatch(verifyOtpSuccess(user));
          callback();
          // } else {
          //   dispatch(verifyOtpFailure(res.data.message))
          // }
        })
        .catch((err) => {
          // dispatch(verifyOtpFailure(err.message))
        });
    } else {
      alert("Please insert valid OTP or Password");
    }
  };
};

export const handleVerifyResetOtp = (otpData, callback) => {
  return (dispatch) => {
    dispatch(authRequest());
    if (otpData.token?.length === 4 && otpData.password?.length > 4) {
      axois
        .post(BASE_API_URL + "/reset-password", otpData)
        .then((res) => {
          if (res.data.status === 1) {
            dispatch(backToPhoneInputScreen(res.data.message));
            callback();
          } else {
            dispatch(authFailure(res.data.message));
          }
        })
        .catch((err) => {
          // dispatch(verifyOtpFailure(err.message))
        });
    } else {
      alert("Please insert valid OTP or Password");
    }
  };
};

const verifyOtpRequest = () => {
  return {
    type: VERIFY_OTP_REQUEST,
  };
};

const verifyOtpSuccess = (userObj) => {
  return {
    type: VERIFY_OTP_SUCCESS,
    payload: userObj,
  };
};

const verifyOtpFailure = (errMsg) => {
  return {
    type: VERIFY_OTP_FAILURE,
    payload: errMsg,
  };
};

export const socialLogin = (socialType, data, callback) => {
  return (dispatch) => {
    dispatch(socialLoginRequest());

    let endPoint = "";
    if (socialType === "facebook") {
      endPoint = "fbLogin";
    } else if (socialType === "google") {
      endPoint = "googleLogin";
    }

    axois.post(`${BASE_API_URL}/${endPoint}`, data).then((res) => {
      if (res.data.status === 1) {
        localStorage.setItem(
          "user",
          JSON.stringify(res.data.user_login_session)
        );
        dispatch(socialLoginSuccess(res.data.user_login_session));
        callback();
      } else {
        dispatch(socialLoginFailure(res.data.message));
      }
    });
  };
};

const socialLoginRequest = () => {
  return {
    type: SOCIAL_LOGIN_REQUEST,
  };
};

const socialLoginSuccess = (data) => {
  return {
    type: SOCIAL_LOGIN_SUCCESS,
    payload: data,
  };
};

const socialLoginFailure = (data) => {
  return {
    type: SOCIAL_LOGIN_FAILURE,
    payload: data,
  };
};

export const handleSignOut = ()=>{
  return{
    type: SIGN_OUT
  }
}
