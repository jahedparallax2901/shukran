import React, {useEffect, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {connect} from "react-redux";
import {
  // destroyedTriggeredFlag,
  handleHideAuthModal,
  handleShowShoppingCart,
  handleAuthentication,
  // triggeredAddToCart,
  handleVerifyOtp,
  // handleAddToCart,
  // getCartItems,
  // socialLogin,
  handleAuthenticationExist,
  handleAuthenticationWithPassword, handleForgotResetPassword, handleVerifyResetOtp
} from "../../redux";
import "../../assets/scss/auth-modal.scss";
import {FaGoogle} from "react-icons/all"
// import firebase from "firebase/app";
import "firebase/auth";
// import {firebaseConfig} from "../../helpers/firebaseConfig";
import {getDeviceType} from "../../helpers/utils";
// import {getLocationList} from "../../services/locationServices";
// import {addToCollect} from "../../services/promotionServices";
import {OTP_RESEND_TIME} from "../../helpers/env";

const AuthModal = ({
                     handleShowShoppingCart,
                     handleAuthentication,
                     showOTP,
                     handleAuthenticationExist,
                     destroyedTriggeredFlag,
                     isTriggeredFromProduct,
                     handleAuthenticationWithPassword,
                     handleForgotResetPassword,
                     handleHideAuthModal,
                     isShownAuthModal,
                     handleVerifyOtp,
                     handleVerifyResetOtp,
                     getCartItems,
                     handleAddToCart,
                    //  socialLogin,
                     errMessage,
                     otp
                   }) => {
  // if (!firebase.apps.length) {
  //   firebase.initializeApp(firebaseConfig);
  // }

  const [authData, setAuthData] = useState({phone: '', country_code: '+880'});
  const [countryList, setCountryList] = useState([]);
  const [resendTime, setResendTime] = useState(OTP_RESEND_TIME)
  const [isOTPSent, setIsOTPSent] = useState(false)
  const [LoginWithPassword, setIsLoginWithPassword] = useState(false)
  const [PasswordReset, setIsPasswordReset] = useState(false)
  const [isSentOnce, setIsSentOnce] = useState(false)
  const [isSending, setIsSending] = useState(false)

  useEffect(() => {
    // getLocationList()
    //   .then(res => {
    //     setCountryList(res)
    //   })
  }, [])

  const handleOTPVerify = () => {
    if (PasswordReset === true) {
      handleVerifyResetOtp({
        token: authData.token,
        password: authData.password,
        device_id: "",
        device_token: "f4as4f5as5f4as5f4as6",
        device_type: getDeviceType()
      }, () => {
        setIsLoginWithPassword(true)
        setIsPasswordReset(false);
        setIsSending(false)
        setIsOTPSent(false)
        setIsSentOnce(false)
        setAuthData({
          ...authData,
          showOTP: true
        })
        this.state.auth.showOTP(true);
        return false;
      })
    } else {
      handleVerifyOtp({
        phone: authData.phone,
        otp: authData.otp,
        password: authData.password,
        // name: authData.name,
        // device_id: "",
        // device_token: "f4as4f5as5f4as5f4as6",
        // device_type: getDeviceType()
      }, () => {
        // getCartItems()
        authModalHide()
      })
    }

  };

  const handleInputOnChange = (e) => {
    if (e.target.name === 'phone') {
      setAuthData({
        ...authData,
        [e.target.name]: e.target.value.replace(/^0+/, '')
      })
    } else {
      setAuthData({
        ...authData,
        [e.target.name]: e.target.value
      })
    }
  }

  // const handleSignInWithFacebook = () => {
  //   const provider = new firebase.auth.FacebookAuthProvider();
  //   handleSocialLogin(provider);
  // }

  // const handleSignInWithGoogle = () => {
  //   const provider = new firebase.auth.GoogleAuthProvider();
  //   handleSocialLogin(provider);
  // }

  // const handleSocialLogin = (provider) => {
  //   firebase.auth().signInWithPopup(provider).then(function (result) {
  //     const user = result.user;
  //     const data = {
  //       id: user.uid,
  //       name: user.displayName,
  //       email: user.email,
  //       phone_number: user.phoneNumber,
  //       device_id: "",
  //       device_token: btoa(Math.random() + navigator.userAgent + Date()),
  //       device_type: getDeviceType(),
  //       os: navigator.platform
  //     }
  //     socialLogin('facebook', data, () => {
  //       authModalHide()
  //       getCartItems()
  //     });
  //   }).catch(function (error) {
  //     console.log('Firebase Error: ', error)
  //   });
  // }

  const authModalHide = () => {
    const localData = localStorage;
    console.log('Local: ', localData)

    handleHideAuthModal();
    // if (isTriggeredFromProduct) {
    //   const productInfo = JSON.parse(localStorage.getItem('productInfo'));
    //   const user = JSON.parse(localStorage.getItem('user'));

    //   handleAddToCart(productInfo.id, productInfo.qnt, user.token, () => {
    //     handleShowShoppingCart();
    //     destroyedTriggeredFlag();
    //     getCartItems(user.token);
    //     localStorage.removeItem('productInfo');
    //   }, false, productInfo?.clear_cart)
    // } else if (localData?.voucherInfo) {
      // addToCollect()
      //   .then(res => {
      //     localStorage.removeItem('voucherInfo')
      //     window.location.reload()
      //   })
    // }
  }

  const handleSendOTP = () => {
    if (LoginWithPassword === true) {
      handleAuthenticationWithPassword({
        country_code: authData.country_code,
        phone: authData.phone,
        password: authData.password,
        device_id: "",
        device_token: "f4as4f5as5f4as5f4as6",
        device_type: getDeviceType()
      }, () => {
        // getCartItems()
        authModalHide()
      })
    } else {
      handleAuthenticationExist(authData, (e) => {
        if (e === 2) {
          setIsLoginWithPassword(true)
          return false;
        } else {
          setIsLoginWithPassword(false)
          setResendTime(OTP_RESEND_TIME)
          setIsSending(true)

          handleAuthentication(authData, () => {
            setIsSending(false)
            setIsOTPSent(true)
            setIsSentOnce(true)

            const resendTimeInterval = setInterval(() => {
              setResendTime(resendTime => {
                if (resendTime > 0) {
                  return resendTime - 1
                } else {
                  clearInterval(resendTimeInterval);
                  setIsOTPSent(false)
                }
              })
            }, 1000)
          })
        }
      })
    }
  }

  const handleForgotPassword = () => {
    setIsOTPSent(true);
    setIsLoginWithPassword(false)
    setResendTime(OTP_RESEND_TIME)
    setIsSending(true)

    handleForgotResetPassword(authData, () => {
      setIsSending(false)
      setIsOTPSent(true)
      setIsSentOnce(true)
      setIsPasswordReset(true);

      const resendTimeInterval = setInterval(() => {
        setResendTime(resendTime => {
          if (resendTime > 0) {
            return resendTime - 1
          } else {
            clearInterval(resendTimeInterval);
            setIsOTPSent(false)
          }
        })
      }, 1000)
    })
  }

  const renderOtpButton = () => {
    if (isOTPSent && isSentOnce) {
      return <span className="icon-text before-verify disabled">
                <span className="text">OTP sent! Resend OTP in {resendTime} <span
                  className={"text-lowercase"}>s</span></span>
              </span>
    } else if (isSending) {
      return <span className="icon-text before-verify disabled">
                 <span className="text">Sending OTP...</span>
               </span>
    } else {
      return <span className="icon-text before-verify">
                Did not receive OTP? <span style={{cursor: "pointer"}}
                                           onClick={handleForgotPassword}
                                           className="text text-primary">Resend OTP</span>
              </span>
    }
  }

  return (
    <div>
      <Modal show={isShownAuthModal}
             dialogClassName="auth-modal"
             onHide={handleHideAuthModal}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="login-form my-2">

            {!showOTP ?
              <div className="login-form-group">
                <label htmlFor="userID" className="sr-only">User ID</label>
                <div className="input-group">
                  <select name="country_code"
                          onChange={handleInputOnChange}
                          className="form-control"
                          value={authData.country_code}
                          style={{flex: '0 0 80px', padding: '0 10px 0 5px'}}>
                    <option value="">+880</option>
{/* 
                    {countryList.map((country, index) => <option key={index}
                                                                 value={country.code}>{country.code}</option>)} */}
                  </select>

                  <input type="text" name="phone"
                         onChange={handleInputOnChange}
                         placeholder={"Enter your phone number"}
                         className="form-control"
                         onKeyUp={(e)=>{if(e.keyCode === 13){
                          handleSendOTP()
                         }}}/>
                </div>

                {LoginWithPassword ?
                  <div className="login-form-group">
                    <label htmlFor="userID">Password</label>
                    <div className="input-group">
                      <input type="password" name="password"
                             onChange={handleInputOnChange}
                             placeholder={"Enter your password"}
                             className="form-control"
                             onKeyUp={(e)=>{if(e.keyCode === 13){
                              handleSendOTP()
                             }}}/>
                    </div>
                  </div>
                  : ""
                }
                {errMessage && <span className={"text-danger"}>{errMessage}</span>}
              </div>
              :
              <>
                <p>We've sent a 4-digit one time PIN in your phone {authData && authData.phone}</p>
                <div className="login-form-group">
                  <label htmlFor="userID" className="sr-only">Verification Code.</label>
                  <input type="text"
                         key={'userID'}
                         name="otp"
                         minLength={4}
                         maxLength={4}
                         placeholder={"- - - -"}
                         onChange={handleInputOnChange}
                         className="login-form-control"/>
                  <Form.Text>{renderOtpButton()}</Form.Text>

                  {/* TODO: OTP will be removed when twello will be connected */}
                  {(otp && process.env.NODE_ENV === 'development') && <Form.Text>CODE is: {otp}</Form.Text>}
                  {errMessage && <span className={"text-danger"}>{errMessage}</span>}
                </div>

                {!PasswordReset ?
                  <div className="login-form-group">
                    <label htmlFor="userID">Name.</label>
                    <input type="text" name="name"
                           onChange={handleInputOnChange}
                           placeholder={"Enter your name"}
                           className="form-control"
                           />

                  </div> : ""
                }
                <div className="login-form-group">
                  <label htmlFor="userID">Password.</label>
                  <input type="password" name="password"
                         onChange={handleInputOnChange}
                         key={'userID'}
                         placeholder={"Enter your password"}
                         className="form-control"
                         />

                </div>
              </>
            }

            {!showOTP ?
              <div>
                <Button
                  onClick={handleSendOTP}
                  className="btn-auth-single"
                  variant={"secondary"} block={true}>Sign In / SIgn Up</Button>
                <Button
                  onClick={handleForgotPassword}
                  className="btn-auth-single"
                  variant={"secondary"} block={true}>Forgot Password</Button>
              </div>
              :
              <Button
                onClick={handleOTPVerify}
                className="btn-auth-single"
                variant={"secondary"} block={true}> {!PasswordReset ? <p>Verify OTP</p> :
                <p>Reset Password</p>} </Button>
            }

            <span className="form-or-seperator"><span>or</span></span>

            <div className="login-buttons">
              <button
                // onClick={handleSignInWithGoogle}
                className="btn-auth btn-google mb-3">
                <span className="icon"><FaGoogle/></span>
                <span className="text">Sign in with Google</span>
              </button>
              {/*<button
                onClick={handleSignInWithFacebook}
                className="btn-auth btn-facebook">
                <span className="icon"><FaFacebook/></span>
                <span className="text">Sign in with Facebook</span>
              </button>*/}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isShownAuthModal: state.auth.isShownAuthModal,
    // isTriggeredFromCollectVoucher: state.auth.isTriggeredFromCollectVoucher,
    // isTriggeredFromProduct: state.shoppingCart.isTriggeredFromProduct,
    showOTP: state.auth.showOTP,
    // userToken: state.auth.userData?.token,
    errMessage: state.auth.errMessage,
    otp: state.auth.otp,
    setIsLoginWithPassword: state.auth.setIsLoginWithPassword,
    setIsPasswordReset: state.auth.setIsPasswordReset
  }
};

const mapDispatchToProps = dispatch => {
  return {
    handleHideAuthModal: () => dispatch(handleHideAuthModal()),
    handleAuthentication: (credential, cb) => dispatch(handleAuthentication(credential, cb)),
    handleAuthenticationExist: (credential, cb) => dispatch(handleAuthenticationExist(credential, cb)),
    handleAuthenticationWithPassword: (credential, cb) => dispatch(handleAuthenticationWithPassword(credential, cb)),
    handleForgotResetPassword: (credential, cb) => dispatch(handleForgotResetPassword(credential, cb)),
    // triggeredAddToCart: () => dispatch(triggeredAddToCart()),
    // destroyedTriggeredFlag: () => dispatch(destroyedTriggeredFlag()),
    handleShowShoppingCart: () => dispatch(handleShowShoppingCart()),
    handleVerifyOtp: (otp, cb) => dispatch(handleVerifyOtp(otp, cb)),
    handleVerifyResetOtp: (otp, cb) => dispatch(handleVerifyResetOtp(otp, cb)),
    // handleAddToCart: (skuId, quantity, token, cb, isBuyNow, clear_cart) => dispatch(handleAddToCart(skuId, quantity, token, cb, isBuyNow, clear_cart)),
    // getCartItems: (token) => dispatch(getCartItems(token)),
    // socialLogin: (socialType, data, cb) => dispatch(socialLogin(socialType, data, cb))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthModal);
