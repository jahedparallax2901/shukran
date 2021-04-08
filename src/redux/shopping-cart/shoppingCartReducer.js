import {
  CHECK_UNCHECK_CART_ITEM_FAILURE,
  CHECK_UNCHECK_CART_ITEM_REQUEST, CHECK_UNCHECK_CART_ITEM_SUCCESS,
  // ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS,
  DESTROYED_TRIGGERED_FLAG, GET_CART_ITEMS_SUCCESS, GET_SKU_LIST_FAILURE, GET_SKU_LIST_REQUEST, GET_SKU_LIST_SUCCESS,
  HIDE_SHOPPING_CART,
  SHOW_SHOPPING_CART,
  TOGGLE_SHOPPING_CART,
  TRIGGER_ADD_TO_CART
} from "./actionTypes";

const initialState = {
  isShowingShoppingCart: false,
  isTriggeredFromProduct: false,
  cartItems: [],
  isSummeryLoading: false,
  cartSummery: null,
  cartSummeryErrMsg: null,
  isSkuLoading: false,
  skuList: [],
  skuListFailureMsg: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SHOPPING_CART:
      return {
        ...state,
        isShowingShoppingCart: !state.isShowingShoppingCart
      };
    case SHOW_SHOPPING_CART:
      return {
        ...state,
        isShowingShoppingCart: true
      };
    case HIDE_SHOPPING_CART:
      return {
        ...state,
        isShowingShoppingCart: false
      };
    case TRIGGER_ADD_TO_CART:
      return {
        ...state,
        isTriggeredFromProduct: true
      };
    case DESTROYED_TRIGGERED_FLAG:
      return {
        ...state,
        isTriggeredFromProduct: false
      };
    case GET_CART_ITEMS_SUCCESS:
      return {
        ...state,
        cartItems: action.payload.cart,
        cartSummery: action.payload.cart_summery
      }
    case CHECK_UNCHECK_CART_ITEM_REQUEST:
      return {
        ...state,
        isSummeryLoading: true
      }
    case CHECK_UNCHECK_CART_ITEM_SUCCESS:
      return {
        ...state,
        isSummeryLoading: false,
        cartSummery: action.payload
      }
    case CHECK_UNCHECK_CART_ITEM_FAILURE:
      return {
        ...state,
        isSummeryLoading: false,
        cartSummeryErrMsg: action.payload
      }
    case GET_SKU_LIST_REQUEST:
      return {
        ...state,
        isSkuLoading: true,
        skuList: []
      }
    case GET_SKU_LIST_SUCCESS:
      return {
        ...state,
        isSkuLoading: false,
        skuList: action.payload
      }
    case GET_SKU_LIST_FAILURE:
      return {
        ...state,
        isSkuLoading: false,
        skuListFailureMsg: action.payload
      }
    default: return state
  }
};

export default reducer;
