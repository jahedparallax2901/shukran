
import { GET_WISHLIST_ITEMS_SUCCESS } from "./actionTypes";

  
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
      default:
        return state;
    }
  };
  
  export default reducer;
  