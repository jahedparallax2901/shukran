import {
  FETCH_MORE_PRODUCTS_FAILURE,
  FETCH_MORE_PRODUCTS_REQUEST, FETCH_MORE_PRODUCTS_SUCCESS,
  PRODUCT_SEARCH_FAILURE,
  PRODUCT_SEARCH_REQUEST,
  PRODUCT_SEARCH_SUCCESS
} from "./actionTypes";

const initialState = {
  products: {},
  isSearching: true,
  isLoadingMore: false,
  searchErrMsg: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_SEARCH_REQUEST:
      return {
        ...state,
        isSearching: true
      }
    case PRODUCT_SEARCH_SUCCESS:
      return {
        ...state,
        isSearching: false,
        products: action.payload
      }
    case PRODUCT_SEARCH_FAILURE:
      return {
        ...state,
        isSearching: false,
        searchErrMsg: action.payload
      }
    default:
      return state
  }
}

export default reducer;
