import {
  ADD_TO_CART_FAILURE,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  CHECK_UNCHECK_CART_ITEM_FAILURE,
  CHECK_UNCHECK_CART_ITEM_REQUEST,
  CHECK_UNCHECK_CART_ITEM_SUCCESS, COUNTER_UPDATE,
  DESTROYED_TRIGGERED_FLAG,
  GET_CART_ITEMS_FAILURE,
  GET_CART_ITEMS_REQUEST,
  GET_CART_ITEMS_SUCCESS, GET_SKU_LIST_FAILURE, GET_SKU_LIST_REQUEST, GET_SKU_LIST_SUCCESS,
  HIDE_SHOPPING_CART,
  REMOVE_CART_ITEM_FAILURE,
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_SUCCESS,
  SHOW_SHOPPING_CART,
  TOGGLE_SHOPPING_CART,
  TRIGGER_ADD_TO_CART
} from "./actionTypes";
import axois from "axios";
import {BASE_API_URL} from "../../helpers/env";
import {reqHeaders, userData} from "../../helpers/authUtils";
import {getDeviceType} from "../../helpers/utils";
// import {getLocationList} from "../../services/locationServices";

const userInfo = userData();

export const handleToggleShoppingCart = () => {
  return {
    type: TOGGLE_SHOPPING_CART
  }
};

export const handleShowShoppingCart = () => {
  return {
    type: SHOW_SHOPPING_CART
  }
};

export const handleHideShoppingCart = () => {
  return {
    type: HIDE_SHOPPING_CART
  }
};

export const triggeredAddToCart = () => {
  return {
    type: TRIGGER_ADD_TO_CART
  }
};

export const destroyedTriggeredFlag = () => {
  return {
    type: DESTROYED_TRIGGERED_FLAG
  }
};


export const handleAddToCart = (skuId, quantity, token, callback, isBuyNow = false, clear_cart, bundle_id=null) => {
  const authData = userData();
  return dispatch => {
    dispatch(addToCartRequest())

    axois.post(BASE_API_URL + '/cart', {
      sku_id: skuId,
      quantity: quantity,
      bundle_id: bundle_id,
      is_buy_now: isBuyNow,
      clear_cart: clear_cart
    }, {
      headers: {
        "x-auth-token": authData.token,
        "x-api-client": "web"
      }
    })
      .then(res => {
        if(res.data.status === 1) {
          dispatch(addToCartSuccess())
          callback(res.data.message, true)
        } else {
          dispatch(addToCartFailure(res.data.message))
          callback(res.data.message, false)
        }
      })
      .catch(err => {
        console.log('Err Msg: ', err.message)
        dispatch(addToCartFailure(err.message))
        callback(err.message, false)
      })
  }
}

const addToCartRequest = () => {
  return {
    type: ADD_TO_CART_REQUEST
  }
}

const addToCartSuccess = () => {
  return {
    type: ADD_TO_CART_SUCCESS
  }
}

const addToCartFailure = (errMsg) => {
  return {
    type: ADD_TO_CART_FAILURE,
    payload: errMsg
  }
}

export const getCartItems = (token, callback) => {
  const authData = userData();
  if(authData?.token) {
    return dispatch => {
      dispatch(getCartItemsRequest());

      axois.get(BASE_API_URL + '/cart', {
        headers: {
          "x-auth-token": authData.token,
          "x-api-client": getDeviceType()
        }
      })
        .then(res => {
          if(res.data.status === 1 || res.data.status === 2) {
            dispatch(getCartItemsSuccess(res.data));
            callback(res.data)
          } else {
            getCartItemsFailure(res.data.message)
          }
        })
        .catch(err => {
          getCartItemsFailure(err.message)
        })
    }
  }

  return dispatch => {}
}

const getCartItemsRequest = () => {
  return {
    type: GET_CART_ITEMS_REQUEST
  }
}

const getCartItemsSuccess = (items) => {
  return {
    type: GET_CART_ITEMS_SUCCESS,
    payload: items
  }
}

const getCartItemsFailure = (errMsg) => {
  return {
    type: GET_CART_ITEMS_FAILURE,
    payload: errMsg
  }
}

export const cartAmountUpdate = (cartItems, id) => {
  return dispatch => {
    const tempCartItems = [...cartItems];
    // const cartItemObj = findSkuId(cartItems, id);
    findSkuId(cartItems, id);
    // console.log('Hello: ', cartItemObj)
  }
}

const findSkuId = (array, id) => {
  // let result;
  array.some(o => o.cart_items.filter(io => io));
  // return result;
};

export const removeCartItem = (id, callback) => {
  const authData = userData();

  return dispatch => {
    dispatch(removeCartItemRequest());
    axois.delete(BASE_API_URL + '/cart/item/' + id, {
      headers: {
        'x-auth-token': authData.token,
        'x-api-client': getDeviceType()
      }
    })
      .then(res => {
        if(res.data.status === 1) {
          dispatch(removeCartItemSuccess(res.data.message));
          callback();
        } else {
          dispatch(removeCartItemFailure(res.data.message))
        }
      })
      .catch(err => {
        dispatch(removeCartItemFailure(err.message))
      })
  }
}

const removeCartItemRequest = () => {
  return {
    type: REMOVE_CART_ITEM_REQUEST
  }
}

const removeCartItemSuccess = (msg) => {
  return {
    type: REMOVE_CART_ITEM_SUCCESS,
    payload: msg
  }
}

const removeCartItemFailure = (msg) => {
  return {
    type: REMOVE_CART_ITEM_FAILURE,
    payload: msg
  }
}

// Check/Uncheck Item
export const checkUncheckCartItem = (data, callback) => {
  const authData = userData()

  return dispatch => {
    dispatch(checkUncheckCartItemRequest())
    axois.patch(BASE_API_URL + '/cart/item/check-uncheck', data, {
      headers: {
        'x-auth-token': authData.token,
        'x-api-client': getDeviceType(),
      }
    })
      .then(res => {
        if(res.data.status === 1) {
          // do something
          dispatch(checkUncheckCartItemSuccess(res.data.cart_summery));
          callback()
        } else {
          dispatch(checkUncheckCartItemFailure(res.data.message))
        }
      })
      .catch(err => {
        checkUncheckCartItemFailure(err.message)
      })
  }
}

const checkUncheckCartItemRequest = () => {
  return {
    type: CHECK_UNCHECK_CART_ITEM_REQUEST
  }
}

const checkUncheckCartItemSuccess = (summery) => {
  return {
    type: CHECK_UNCHECK_CART_ITEM_SUCCESS,
    payload: summery
  }
}

const checkUncheckCartItemFailure = (msg) => {
  return {
    type: CHECK_UNCHECK_CART_ITEM_FAILURE,
    payload: msg
  }
}

export const getSkuList = (id) => {
  return dispatch => {
    dispatch(getSkuListRequest());
    axois.get(`${BASE_API_URL}/product/${id}/sku-list`)
      .then(res => {
        if(res.data.status === 1) {
          dispatch(getSkuListSuccess(res.data.product))
        } else {
          dispatch(getSkuListFailure(res.data.message))
        }
      })
      .catch(err => {
        dispatch(getSkuListFailure(err.message))
      })
  }
}

const getSkuListRequest = () => {
  return {
    type: GET_SKU_LIST_REQUEST
  }
}

const getSkuListSuccess = (sku) => {
  return {
    type: GET_SKU_LIST_SUCCESS,
    payload: sku
  }
}

const getSkuListFailure = (errMsg) => {
  return {
    type: GET_SKU_LIST_FAILURE,
    payload: errMsg
  }
}
