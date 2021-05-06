import logo from "./logo.svg";
import { Provider } from "react-redux";
import store from "./redux/store";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
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
import Checkout from "./pages/Checkout";
import Invoice from "./pages/invoice";
import PrivateRoute from "./components/PrivateRoute";
import MerchantForm from "./pages/MerchantForm";
import Campaign from "./pages/Campaign";
import BecomeAVendor from "./pages/vendor/BecomeAVendor";
import Wishlist from "./pages/Wishlist";
import StoreDetails from "./pages/store/StoreDetails";
import VendorStore from "./pages/vendor/VendorStore";
import ProductCompare from "./pages/product/ProductCompare";
import MyContacts from "./pages/account/MyContacts";
import VendorStoreDetails from "./pages/store/VendorStoreDetails";
import DigitalSheba from "./pages/DigitalSheba";
import LittleBangladesh from "./pages/LittleBangladesh";

function App() {
  const homePath = "/";
  return (
    <Provider store={store}>
      <Router>
        <AuthModal />
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
          <PrivateRoute
            redirectTo={homePath}
            onUpdate={() => window.scrollTo(0, 0)}
            path="/checkout"
          >
            <Checkout />
          </PrivateRoute>
          <Route onUpdate={() => window.scrollTo(0, 0)} path="/product/:id">
            <ProductDetails />
          </Route>
          <Route onUpdate={() => window.scrollTo(0, 0)} path="/search">
            <SearchProduct />
          </Route>
          <Route
            onUpdate={() => window.scrollTo(0, 0)}
            path="/account/my-account"
          >
            <MyAccount />
          </Route>
          <Route
            onUpdate={() => window.scrollTo(0, 0)}
            path="/account/my-orders"
          >
            <MyOrders />
          </Route>
          <Route onUpdate={() => window.scrollTo(0, 0)} path="/account/coupons">
            <MyCoupons />
          </Route>
          <Route
            onUpdate={() => window.scrollTo(0, 0)}
            path="/account/wishlist"
          >
            <MyWishlist />
          </Route>
          <Route
            onUpdate={() => window.scrollTo(0, 0)}
            path="/account/disputes"
          >
            <Disputes />
          </Route>
          <Route
            onUpdate={() => window.scrollTo(0, 0)}
            path="/account/shipping-address"
          >
            <ShippingAddress />
          </Route>
          <Route
              onUpdate={() => window.scrollTo(0, 0)}
              path="/account/contacts"
          >
            <MyContacts />
          </Route>
          <Route
            onUpdate={() => window.scrollTo(0, 0)}
            path="/account/billing-address"
          >
            <BillingAddress />
          </Route>

          <Route onUpdate={() => window.scrollTo(0, 0)} path="/merchant-apply">
            <MerchantForm />
          </Route>

          <Route onUpdate={() => window.scrollTo(0, 0)} path="/invoice/:id">
            <Invoice />
          </Route>

          <Route onUpdate={() => window.scrollTo(0, 0)} path="/campaign">
            <Campaign />
          </Route>

          <Route
            onUpdate={() => window.scrollTo(0, 0)}
            path="/vendor/become-a-vendor"
          >
            <BecomeAVendor />
          </Route>

          <Route onUpdate={() => window.scrollTo(0, 0)} path="/wishlist">
            <Wishlist />
          </Route>

          <Route
            onUpdate={() => window.scrollTo(0, 0)}
            path="/store/store-details"
          >
            <StoreDetails />
          </Route>

          <Route onUpdate={() => window.scrollTo(0, 0)} path="/vendor/store">
            <VendorStore />
          </Route>

          <Route onUpdate={() => window.scrollTo(0, 0)} path="/store/product/:id">
            <VendorStoreDetails />
          </Route>

          <Route onUpdate={() => window.scrollTo(0, 0)} path="/compare">
            <ProductCompare />
          </Route>

          <Route onUpdate={() => window.scrollTo(0, 0)} path="/digital-sheba">
            <DigitalSheba />
          </Route>

          <Route onUpdate={() => window.scrollTo(0, 0)} path="/little-bangladesh">
            <LittleBangladesh />
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
