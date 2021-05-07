import {
  FETCH_MORE_PRODUCTS_REQUEST, FETCH_MORE_PRODUCTS_SUCCESS,
  PRODUCT_SEARCH_FAILURE,
  PRODUCT_SEARCH_REQUEST,
  PRODUCT_SEARCH_SUCCESS
} from "./actionTypes";
import axois from "axios";
import {BASE_API_URL} from "../../helpers/env";
import {userData} from "../../helpers/authUtils";
import {getDeviceType} from "../../helpers/utils";
// import searchedProducts from "../../static-data/searchedProducts";


export const fetchSearchedProducts = (params = {}, callback=(()=>{})) => {
  const authData = userData()

  return dispatch => {
    dispatch(productSearchRequest());

    axois.get(BASE_API_URL + '/search-engine', {
      params,
      headers: {
        "Content-Type": "application/json",
        'Authorization': authData?.token || '',
      },
    })
      .then(res => {
        dispatch(productSearchSuccess(res.data.product.data));
        callback(res.data);
      })
      .catch((err) => {
        dispatch(productSearchFailure(err.message))
        callback(err)
      })
  }
}



const productSearchRequest = () => {
  return {
    type: PRODUCT_SEARCH_REQUEST
  }
}

const productSearchSuccess = (products) => {
  return {
    type: PRODUCT_SEARCH_SUCCESS,
    payload: products
  }
}

const productSearchFailure = (errMsg) => {
  return {
    type: PRODUCT_SEARCH_FAILURE,
    payload: errMsg
  }
}