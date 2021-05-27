import {
  CLEAR_WISHLIST_ITEMS,
  GET_WISHLIST_ITEMS_SUCCESS
} from "./actionTypes";

const initialState = {
  wishListItems: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WISHLIST_ITEMS_SUCCESS:
      return {
        ...state,
        wishListItems: action.payload,
      };
    case CLEAR_WISHLIST_ITEMS:
      return {
        wishListItems: [],
      };
    default:
      return state;
  }
};

export default reducer;
