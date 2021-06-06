import axios from 'axios';
import { userData } from "../../helpers/authUtils";
import { BASE_API_URL } from "../../helpers/env";
import { getDeviceType } from "../../helpers/utils";
import { ADD_TO_WISHLIST_FAILURE, ADD_TO_WISHLIST_REQUEST, ADD_TO_WISHLIST_SUCCESS, CLEAR_WISHLIST_ITEMS, GET_WISHLIST_ITEMS_FAILURE, GET_WISHLIST_ITEMS_REQUEST, GET_WISHLIST_ITEMS_SUCCESS } from "./actionTypes";

export const handleAddToWishlist = (
   product_id,
   callback
  ) => {
    const authData = userData();

    return (dispatch) => {
      dispatch(addToWishlistRequest());
      
      axios
        .post(BASE_API_URL + `/add-to-wishlist/${product_id}`, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": authData?.token,
            "x-api-client": "web",
          },
        })
        .then((res) => {
          dispatch(addToWishlistSuccess());
          callback(res.data, true);
          // if(res.data.status === 1) {
          //   dispatch(addToWishlistSuccess())
          //   callback(res.data, true)
          // } else {
          //   dispatch(addToWishlistFailure(res.data.message))
          //   callback(res.data, false)
          // }
        })
        .catch((err) => {
          dispatch(addToWishlistFailure(err.response.data.message));
          callback(err.response.data.message, false);
        });
    };
  };

  const addToWishlistRequest = () => {
    return {
      type: ADD_TO_WISHLIST_REQUEST,
    };
  };
  
  const addToWishlistSuccess = () => {
    return {
      type: ADD_TO_WISHLIST_SUCCESS,
    };
  };
  
  const addToWishlistFailure = (errMsg) => {
    return {
      type: ADD_TO_WISHLIST_FAILURE,
      payload: errMsg,
    };
  };

  export const handleClearWishlist = () =>{
    return{
      type: CLEAR_WISHLIST_ITEMS
    }
  }

  export const getWishlistItems = (callback) => {
    const authData = userData();

      return (dispatch) => {
        dispatch(getWishlistItemsRequest());
  
        axios
          .get(BASE_API_URL + "/get-wishlist", {
            params: {},
            headers: {
              "Content-Type": "application/json",
              "Authorization": authData?.token,
              "x-api-client": getDeviceType(),
            },
          })
          .then((res) => {
            // if (res.data.status === 1 || res.data.status === 2) {
              dispatch(getWishlistItemsSuccess(res.data.wish_lists.data));
              callback(res.data.wish_lists.data, true);
            // } else {
            //   getWishlistItemsFailure(res.data.message);
            // }
          })
          .catch((err) => {
            getWishlistItemsFailure(err.message);
          });
      };
  };

  const getWishlistItemsRequest = () => {
    return {
      type: GET_WISHLIST_ITEMS_REQUEST,
    };
  };
  
  const getWishlistItemsSuccess = (items) => {
    return {
      type: GET_WISHLIST_ITEMS_SUCCESS,
      payload: items,
    };
  };
  
  const getWishlistItemsFailure = (errMsg) => {
    return {
      type: GET_WISHLIST_ITEMS_FAILURE,
      payload: errMsg,
    };
  };