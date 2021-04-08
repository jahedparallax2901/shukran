import {combineReducers} from 'redux'
import shoppingCartReducer from './shopping-cart/shoppingCartReducer';
// import sidebarReducer from './sidebar/sidebarReducer';
import authReducer from './auth/authReducer';
// import productSearchReducer from './product-search/productSearchReducer';
// import shippingAddressReducer from './shipping-address/shippingAddressReducer';
// import billingAddressReducer from './billing-address/billingAddressReducer';
// import recommendationReducer from './recommendation/recomendationReducer';
// import merchantReducer from './merchant/merchantReducer';
// import storeSearchReducer from './store-search/storeSearchReducer';

const rootReducer = combineReducers({
  shoppingCart: shoppingCartReducer,
  // sidebar: sidebarReducer,
  auth: authReducer,
  // productSearch: productSearchReducer,
  // shippingAddress: shippingAddressReducer,
  // billingAddress: billingAddressReducer,
  // recommendation: recommendationReducer,
  // merchant: merchantReducer,
  // storeSearch: storeSearchReducer,
});

export default rootReducer
