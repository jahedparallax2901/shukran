import logo from "./logo.svg";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Switch, Redirect, Route } from "react-router-dom";
import Home from "./pages/Home";
import AuthModal from "./components/auth/AuthModal";
import ProductDetails from "./pages/ProductDetails";
import SearchProduct from "./pages/SearchProduct";
import MyOrders from "./pages/account/MyOrders";
import MyAccount from "./pages/account/MyAccount";
import MyCoupons from "./pages/account/MyCoupons";
import MyWishlist from "./pages/account/MyWishlist";
import Disputes from "./pages/account/Disputes";
import ShippingAddress from "./pages/account/ShippingAddress";
import BillingAddress from "./pages/account/BillingAddress";
import NotFound from "./pages/NotFound";
import Checkout from "./pages/Checkout"
import Invoice from "./pages/invoice";

function App() {
  return (
    <Provider store={store}>
      <Router>
      <AuthModal/>
        <Switch>
              <Route onUpdate={() => window.scrollTo(0, 0)} exact path="/">
                <Home />
              </Route>
              <Route onUpdate={() => window.scrollTo(0, 0)} path="/product/:id">
                <ProductDetails />
              </Route>
              <Route onUpdate={() => window.scrollTo(0, 0)} path="/search">
                <SearchProduct />
              </Route>
            <Route onUpdate={() => window.scrollTo(0, 0)} path="/checkout">
                <Checkout/>
            </Route>
          <Route onUpdate={() => window.scrollTo(0, 0)} exact path="/">
            <Home />
          </Route>
          <Route onUpdate={() => window.scrollTo(0, 0)} path="/product/:id">
            <ProductDetails />
          </Route>
          <Route onUpdate={() => window.scrollTo(0, 0)} path="/search">
            <SearchProduct />
          </Route>
          <Route onUpdate={() => window.scrollTo(0, 0)} path="/account/my-account">
            <MyAccount />
          </Route>
          <Route onUpdate={() => window.scrollTo(0, 0)} path="/account/my-orders">
            <MyOrders />
          </Route>
          <Route onUpdate={() => window.scrollTo(0, 0)} path="/account/coupons">
            <MyCoupons />
          </Route>
          <Route onUpdate={() => window.scrollTo(0, 0)} path="/account/wishlist">
            <MyWishlist />
          </Route>
          <Route onUpdate={() => window.scrollTo(0, 0)} path="/account/disputes">
            <Disputes />
          </Route>
          <Route onUpdate={() => window.scrollTo(0, 0)} path="/account/shipping-address">
            <ShippingAddress />
          </Route>
          <Route onUpdate={() => window.scrollTo(0, 0)} path="/account/billing-address">
            <BillingAddress />
          </Route>

            <Route onUpdate={() => window.scrollTo(0, 0)} path="/invoice">
                <Invoice/>
            </Route>

          <Route onUpdate={() => window.scrollTo(0, 0)} path="*">
            <NotFound />
          </Route>

        </Switch>
      </Router>
   </Provider>
  );
}


export default App;
